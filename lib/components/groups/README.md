# Groups Component

**Purpose**: Manages user groups. These serve two distinct purposes in the app:

1. **Standard Groups**: Admin-defined groups for permissions or bundling users.
2. **Game Teams**: If `InformationModel.gameType` is active, groups function as
   "Teams" for the event game.

## Core Concepts

### 1. User Group (`UserGroupInfoModel`)

- **Role**: Container for users.
- **Admin**: Groups can have leader/admin users
  (`group_participant_model.dart`).

### 2. Game Logic Interaction

When the event is in "Game Mode":

- **Data**: The `get_all_user_groups` RPC returns extra data
  (`game_definitions`), effectively dictionary mapping checkpoint IDs to Titles.
- **Checkpoints**: `getCorrectlyGuessedCheckpoints` ->
  `game_get_correctly_guessed_checkpoints` RPC. This fetches the game progress
  for the current user's group.

## Critical Implementation Details

- **RPC Complexity**: `get_all_user_groups` is polymorphic; it behaves
  differently if the `p_type` parameter indicates a Game.
