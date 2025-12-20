#!/bin/bash
set -e

# Usage: ./scripts/set_domain.sh <domain_name>
# Example: ./scripts/set_domain.sh live.festapp.net

DOMAIN=$1

if [ -z "$DOMAIN" ]; then
  echo "Error: Domain name argument is required."
  echo "Usage: ./scripts/set_domain.sh <domain_name>"
  exit 1
fi

echo "Setting domain to: $DOMAIN"

# 1. Update index.html meta tags
INDEX_FILE="web_client/index.html"
if [ -f "$INDEX_FILE" ]; then
    echo "Updating $INDEX_FILE..."
    # Replace content="https://<anything>/" with content="https://$DOMAIN/" in meta tags
    # Specifically targeting og:url, twitter:url, twitter:image, og:image
    # Note: Using | as delimiter for sed to avoid escaping slashes
    sed -i '' "s|content=\"https://[^/]*|content=\"https://$DOMAIN|g" "$INDEX_FILE"
    echo "✔ Updated meta tags in $INDEX_FILE"
else
    echo "Warning: $INDEX_FILE not found."
fi

# 2. Update CNAME file (if exists, or create it)
# GitHub Pages needs a CNAME file in the root of the published directory (web_client/public)
CNAME_FILE="web_client/public/CNAME"
# Ensure directory exists
mkdir -p "web_client/public"
echo "$DOMAIN" > "$CNAME_FILE"
echo "✔ Created/Updated $CNAME_FILE with $DOMAIN"


# 3. Update app_config.js flutterAppUrl
CONFIG_FILE="web_client/src/app_config.js"
if [ -f "$CONFIG_FILE" ]; then
    echo "Updating $CONFIG_FILE..."
    # Set static flutterAppUrl = '/flutter.html';
    # This is actually constant for the unified build structure, but good to enforce.
    sed -i '' "s|static flutterAppUrl = '.*';|static flutterAppUrl = '/flutter.html';|g" "$CONFIG_FILE"
    echo "✔ Updated flutterAppUrl in $CONFIG_FILE"
else
     echo "Warning: $CONFIG_FILE not found."
fi

echo "Domain setup complete."
