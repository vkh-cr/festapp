#!/usr/bin/env python3
from pathlib import Path
from shlex import quote

path = Path(".env")
updates = {
    "COMPOSE_FILE": "docker-compose.yml:docker-compose.festapp.yml",
    "FESTAPP_SUPABASE_HOSTNAME": "rehearsal-api.festapp.net",
    "SUPABASE_PUBLIC_URL": "https://rehearsal-api.festapp.net",
    "API_EXTERNAL_URL": "https://rehearsal-api.festapp.net",
    "SITE_URL": "https://festapp-rehearsal.invalid",
    "ADDITIONAL_REDIRECT_URLS": "",
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
