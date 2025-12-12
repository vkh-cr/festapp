# News Component

**Purpose**: An announcement board that integrates with Push Notifications.

## Architecture

### 1. Unified Creation

When an admin creates a news item (`DbNews.insertNewsMessage`), the app performs
two actions:

1. **Platform News**: Inserts into `news` table for the in-app feed.
2. **Notification**: Parses the HTML message _on the client_, strips tags, and
   inserts into `log_notifications`.

### 2. Notification Delivery

- The `log_notifications` table is monitored by a database trigger or external
  worker (Supabase Edge Function) that actually sends the Push/Email via
  OneSignal.
- **Client Responsibility**: The Flutter app is responsible for formatting the
  _content_ of the notification before insertion.

## Critical Implementation Details

- **Read State**: "Read" status is tracked via `user_news` join table
  (many-to-many). `getLastReadMessage` optimizes this by just checking the
  highest ID seen.
