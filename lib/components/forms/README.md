# Forms (Dynamic Data Collection & Ticket Ordering)

## The Form Bundle (CRITICAL)

Forms are NOT simple definitions. `get_form_by_link` RPC returns a massive bundle:
- Form metadata + field definitions
- Products with dynamic availability (checked via `is_product_dynamically_available` SQL)
- Session `secret` UUID for spot locking

If a product isn't showing, check `is_product_dynamically_available` in SQL, not Dart.

## Gotchas

- **Never hardcode field IDs**. Find fields by `type` or `data` attributes -- IDs are generated.
- **Two submit paths**: Registration -> `create_form_ws` RPC. Ticket orders -> `send-ticket-order` Edge Function.
- **`widgets_view/`** = runtime (user-facing). **`widgets_editor/`** = design-time (admin drag-and-drop). Don't mix them.

## Rendering Engine

`FormPage` calls `DbForms.getFormFromLink`, iterates `form.fields`, selects widget by `field.type`, collects data into `FormHolder`.

## SQL RPCs

- `get_form_by_link` -- complete form bundle for user rendering (includes session secret)
- `get_form_for_edit` -- form + fields + products + bank accounts for admin
- `create_form_ws` -- creates form / submits registration
- `update_form` -- updates form metadata
- `duplicate_form_to_occasion` -- copies form to target occasion
- `get_blueprint` -- loads blueprint seat map for form session
