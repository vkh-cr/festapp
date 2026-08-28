#!/usr/bin/env python3
import os
import re
from pathlib import Path
from shlex import quote
from urllib.parse import urlsplit

path = Path(".env")
runtime_database = os.environ.get("FESTAPP_RUNTIME_DATABASE", "postgres")
if runtime_database != "postgres" and not re.fullmatch(r"festapp_rehearsal_[0-9]{14}", runtime_database):
    raise SystemExit("FESTAPP_RUNTIME_DATABASE must be postgres or a timestamped rehearsal database")

auth_site_url = os.environ.get("FESTAPP_AUTH_SITE_URL", "https://festapp-rehearsal.invalid")
auth_redirect_urls = os.environ.get("FESTAPP_AUTH_REDIRECT_URLS", "")


def https_origin(value: str) -> str:
    parsed = urlsplit(value)
    if (parsed.scheme != "https" or not parsed.hostname or parsed.username or parsed.password
            or parsed.path not in ("", "/") or parsed.query or parsed.fragment):
        raise SystemExit("FESTAPP_AUTH_SITE_URL must be an HTTPS origin")
    return f"https://{parsed.netloc}"


auth_site_url = https_origin(auth_site_url)
for redirect in filter(None, (item.strip() for item in auth_redirect_urls.split(","))):
    parsed = urlsplit(redirect)
    if (parsed.scheme != "https" or not parsed.hostname or parsed.username or parsed.password
            or parsed.query or parsed.fragment or not parsed.path.startswith("/")):
        raise SystemExit("FESTAPP_AUTH_REDIRECT_URLS contains an invalid HTTPS callback URL")
    if f"https://{parsed.netloc}" != auth_site_url:
        raise SystemExit("Auth redirect callbacks must use FESTAPP_AUTH_SITE_URL origin")
updates = {
    "COMPOSE_FILE": "docker-compose.yml:docker-compose.festapp.yml:docker-compose.database-target.yml",
    "FESTAPP_RUNTIME_DATABASE": runtime_database,
    "FESTAPP_SUPABASE_HOSTNAME": "rehearsal-api.festapp.net",
    "SUPABASE_PUBLIC_URL": "https://rehearsal-api.festapp.net",
    "API_EXTERNAL_URL": "https://rehearsal-api.festapp.net",
    "SITE_URL": auth_site_url,
    "ADDITIONAL_REDIRECT_URLS": auth_redirect_urls,
    "FESTAPP_ALLOWED_WEB_ORIGINS": auth_site_url,
    "DISABLE_SIGNUP": "true",
    "ENABLE_PHONE_SIGNUP": "false",
    "ENABLE_PHONE_AUTOCONFIRM": "false",
    "DASHBOARD_USERNAME": "festapp-rehearsal",
    "STUDIO_DEFAULT_ORGANIZATION": "Festapp Rehearsal",
    "STUDIO_DEFAULT_PROJECT": "Canonical Merge Rehearsal",
}

lines = path.read_text().splitlines()
seen = set()
output = []
for line in lines:
    key = line.split("=", 1)[0] if "=" in line and not line.lstrip().startswith("#") else None
    if key in updates:
        output.append(f"{key}={quote(updates[key])}")
        seen.add(key)
    else:
        output.append(line)
for key, value in updates.items():
    if key not in seen:
        output.append(f"{key}={quote(value)}")
path.write_text("\n".join(output) + "\n")
path.chmod(0o600)
