# Users Component

## Companion projection and commands

Companion policy comes from cached `occasion_config`. Relationship identity,
origin, live standard groups and attendance come only from the active
identity's full `private_profile` replacement. Self-created account lifecycle
and admin assignment are separate commands; admin unassignment removes only
the occasion relationship. Admin mutations invalidate the owner's private head
without activating the owner's payload in the admin identity scope.
Companion identity and accommodation remain normal `user_info` and
`occasion_users.services` data. The relationship never copies participant
fields; the client resolves accommodation with the same occasion catalog and
map projection used for the signed-in user's profile.

## The User Bundle (CRITICAL)

`get_users_from_occasion_with_orders` RPC returns dictionary-style maps (not nested JSON) to avoid duplication. Dart (`db_users.dart`) manually re-stitches the graph by resolving IDs across: users -> tickets -> orderProductTickets -> orders -> forms -> formFields.

**This re-stitching is fragile.** Schema changes (renaming JSON keys) break it silently.

## Gotchas

- **Hidden Occasions**: If users are "missing" from lists, check `occasions.is_hidden` flag -- it hides the entire occasion, not individual users. There is no per-user `is_hidden` column.
- **Profile Data from Forms**: Birth date and group features are parsed from dynamic form data -- code matches fields by `type == "birth_date"` (or `"birth_year"`) and by `data["is_group_feature"] == true` in form responses.
- **Multi-tenancy**: `OccasionUserModel` = user in event context. `UnitUserModel` = user in permanent group context. Different tables, different RPCs.

## SQL RPCs

- `get_users_from_occasion_with_orders` -- full user-ticket-order-form graph as dictionary maps
- `get_occasion_users_for_edit` -- occasion users with forms for admin editing
- `create_user_in_organization_with_data_ws` -- creates user account with initial data
- `add_user_to_occasion` -- adds existing user to an occasion
- `import_users_from_tickets_ws` -- bulk-creates users from ticket data
- `update_user` -- updates user profile for an occasion

## Users Editor Performance

The Users admin tab intentionally loads the complete occasion roster. Keep
`get_occasion_users_for_edit` set-based: order metadata and standard-group
titles must be aggregated once per occasion and joined back to visible users.
Do not reintroduce per-user correlated/LATERAL lookups. Ticket-to-order lookups
depend on `eshop.order_product_ticket (ticket, id)`.

Both the Users and Stay tabs consume this same bundle. Build its roster with
`json_agg(row_to_json(...))` from the `occasion_users` editor contract. The
effective `data` object starts with `occasion_users.data`, then overlays only
the dedicated canonical profile columns from `user_info` (email, name, surname,
sex, phone, and birth date). Never merge the complete `user_info` row or
`user_info.data`: it contains historical occasion-specific fields, adds
substantial payload, and can leak values between occasions. Keep the profile
join optional so legacy `occasion_users` rows without `user_info` remain
visible.

Profile writers use `get_user_profile_data_patch` to copy only name, surname,
sex, phone, and birth date into the legacy `user_info.data` mirror while the
dedicated `user_info` columns remain authoritative. Occasion notes, invitations,
diet, arbitrary form answers, and `occasion_users.services` must never be copied
into the profile. Existing legacy JSON is retained as a registration snapshot;
it is not an implicit current-profile override.
