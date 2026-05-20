#!/bin/bash
# Wrapper to run the Node.js deployment script
# Usage: ./automation/deploy.sh [config_file]

CONFIG_FILE=${1:-"project.conf"}

if [ "$1" ]; then
    echo "Switching configuration to $CONFIG_FILE..."
    cp "automation/$CONFIG_FILE" "automation/project.conf"
fi

node automation/deploy_from_conf.js
