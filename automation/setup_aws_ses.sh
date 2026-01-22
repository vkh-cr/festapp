#!/bin/bash

# Configuration
DOMAIN="festapp.net"
RULE_SET_NAME="festapp-receipt-rules"
RULE_NAME="bank-email-forwarding"
TOPIC_NAME="festapp-bank-emails"
REGION="eu-central-1" # Change as needed

# Colors
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}AWS SES Email Forwarding Setup${NC}"
echo "This script will configure AWS SES to forward emails to your Supabase Edge Function via SNS."
echo ""

# 1. Get Function URLs (Multiple subscribers supported)
URLS=()
echo "Enter Supabase Edge Function URLs. Press Enter without typing to finish."
while true; do
    read -p "Edge Function URL (e.g., https://ref.supabase.co/functions/v1/bank-mail-parser): " INPUT_URL
    if [ -z "$INPUT_URL" ]; then
        break
    fi
    URLS+=("$INPUT_URL")
done

if [ ${#URLS[@]} -eq 0 ]; then
    echo "Error: At least one URL is required."
    exit 1
fi

echo ""
echo "Using Region: $REGION"
echo "Domain: $DOMAIN"
echo "Topic: $TOPIC_NAME"
echo "Subscribers: ${#URLS[@]}"
echo ""

# 2. Create SNS Topic
echo "Creating SNS Topic..."
TOPIC_ARN=$(aws sns create-topic --name $TOPIC_NAME --region $REGION --output text --query 'TopicArn')
echo "Topic ARN: $TOPIC_ARN"

# 3. Create Subscriptions
EXISTING_SUBS=$(aws sns list-subscriptions-by-topic --topic-arn "$TOPIC_ARN" --region $REGION --output json)

for EDGE_URL in "${URLS[@]}"; do
    # Check if already subscribed
    # We use grep roughly here. JSON parsing with jq would be better but requires jq installed.
    if echo "$EXISTING_SUBS" | grep -q "$EDGE_URL"; then
        echo "Endpoint $EDGE_URL is already subscribed."
    else
        echo "Subscribing $EDGE_URL to SNS Topic..."
        aws sns subscribe \
            --topic-arn "$TOPIC_ARN" \
            --protocol https \
            --notification-endpoint "$EDGE_URL" \
            --region $REGION
        echo "Subscription request sent for $EDGE_URL."
    fi
done

done

echo "AWS will send confirmation requests to these endpoints. Ensure they are deployed and handle 'SubscriptionConfirmation'."

# 3b. Verify Subdomain Identity (Required for 'bank.festapp.net' routing)
SUBDOMAIN="bank.$DOMAIN"
echo "Verifying Identity for $SUBDOMAIN..."
aws ses verify-domain-identity --domain $SUBDOMAIN --region $REGION 2>/dev/null
echo "Identity verification request sent. Check your Email or DNS (TXT record) if widely different."

# 4. Create SES Receipt Rule Set (Ignore if exists)
echo "Creating Receipt Rule Set..."
aws ses create-receipt-rule-set --rule-set-name $RULE_SET_NAME --region $REGION 2>/dev/null || echo "Rule set already exists."

# 5. Create Receipt Rule
echo "Creating Receipt Rule..."
aws ses create-receipt-rule \
    --rule-set-name $RULE_SET_NAME \
    --region $REGION \
    --rule "{
        \"Name\": \"$RULE_NAME\",
        \"Enabled\": true,
        \"Recipients\": [\"bank.$DOMAIN\"], 
        \"Actions\": [
            {
                \"SNSAction\": {
                    \"TopicArn\": \"$TOPIC_ARN\",
                    \"Encoding\": \"UTF-8\"
                }
            }
        ]
    }" 2>/dev/null || echo "Rule might already exist or needs update. Check AWS Console."

# Note: The Recipient match 'bank' matches 'bank@domain' if verified.
# For 'bank.*', simpler approach is to match all emails in this rule and filter in function.

echo ""
echo -e "${GREEN}Setup Complete!${NC}"
echo "1. Verify the SNS subscription in AWS Console if needed."
echo "2. Ensure '$RULE_SET_NAME' is the ACTIVE rule set in SES."
echo "   Command: aws ses set-active-receipt-rule-set --rule-set-name $RULE_SET_NAME --region $REGION"
