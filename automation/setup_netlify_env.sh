#!/bin/bash

# Define colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Festapp Netlify Environment Setup${NC}"
echo "-----------------------------------"

# 1. Check for Netlify CLI
if ! command -v netlify &> /dev/null; then
    echo "Netlify CLI not found globally. Using npx..."
    NETLIFY_CMD="npx netlify-cli"
else
    NETLIFY_CMD="netlify"
fi

# 2. Extract Secrets from AppConfig
# Since values are hardcoded in the client, we can extract them for the server environment.
CONFIG_FILE="web_client/src/app_config.js"

if [ ! -f "$CONFIG_FILE" ]; then
    echo -e "${RED}Error: $CONFIG_FILE not found.${NC}"
    exit 1
fi

echo -e "${GREEN}Reading secrets from $CONFIG_FILE...${NC}"

# Extract values using grep/sed
# Extract values using grep/sed with flexible whitespace handling
# Matches: static supabaseUrl = '...' (spaces optional)
URL=$(grep -o "static[[:space:]]*supabaseUrl[[:space:]]*=[[:space:]]*['\"][^'\"]*['\"]" "$CONFIG_FILE" | sed -E "s/.*=['\"]([^'\"]*)['\"]/\1/")
KEY=$(grep -o "static[[:space:]]*anonKey[[:space:]]*=[[:space:]]*['\"][^'\"]*['\"]" "$CONFIG_FILE" | sed -E "s/.*=['\"]([^'\"]*)['\"]/\1/")

if [ -z "$URL" ] || [ -z "$KEY" ]; then
    echo -e "${RED}Error: Could not extract values from $CONFIG_FILE${NC}"
    exit 1
fi

echo "Found SUPABASE_URL: ${URL:0:20}..."
echo "Found SUPABASE_ANON_KEY: ${KEY:0:10}..."

# 4. Upload to Netlify
echo -e "\n${YELLOW}Uploading to Netlify...${NC}"
echo "You may be prompted to link a site if not already linked."

# Using 'netlify env:set' automatically handles linking if needed
$NETLIFY_CMD env:set SUPABASE_URL "$URL"
$NETLIFY_CMD env:set SUPABASE_ANON_KEY "$KEY"

echo -e "\n${GREEN}Success! Environment variables set.${NC}"
echo "Your next deploy will automatically use these values."
