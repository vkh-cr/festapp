CREATE OR REPLACE FUNCTION delete_occasion(oc bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    unit_id BIGINT;
BEGIN

  SELECT unit
  INTO unit_id
  FROM public.occasions
  WHERE id = oc;

  PERFORM check_is_manager_on_unit(unit_id);

  -- ***********************************************************
  -- 1. Delete records that depend on 'events'.
  --    This must be done before deleting the events themselves.
  -- ***********************************************************
  DELETE FROM public.event_groups
    WHERE event_parent IN (SELECT id FROM public.events WHERE occasion = oc)
       OR event_child  IN (SELECT id FROM public.events WHERE occasion = oc);

  DELETE FROM public.event_roles
    WHERE event IN (SELECT id FROM public.events WHERE occasion = oc);

  DELETE FROM public.event_users
    WHERE event IN (SELECT id FROM public.events WHERE occasion = oc);

  DELETE FROM public.event_users_saved
    WHERE event IN (SELECT id FROM public.events WHERE occasion = oc);

  DELETE FROM public.exclusive_events
    WHERE event IN (SELECT id FROM public.events WHERE occasion = oc);

  -- ***********************************************************
  -- 2. Delete the 'events' themselves.
  --    This is now safe because all records that referenced events
  --    were deleted in Step 1. This step resolves the foreign
  --    key violation with the 'places' table.
  -- ***********************************************************
  DELETE FROM public.events
    WHERE occasion = oc;

  -- ***********************************************************
  -- 3. Delete 'orders' dependent records.
  -- ***********************************************************
  DELETE FROM eshop.order_product_ticket
    WHERE "order" IN (SELECT id FROM eshop.orders WHERE occasion = oc);

  DELETE FROM eshop.orders_history
    WHERE "order" IN (SELECT id FROM eshop.orders WHERE occasion = oc);

  -- ***********************************************************
  -- 4. Delete form-related records.
  -- ***********************************************************
  DELETE FROM public.form_fields
    WHERE form IN (SELECT id FROM public.forms WHERE occasion = oc);

  DELETE FROM public.forms
    WHERE occasion = oc;

  -- ***********************************************************
  -- 5. Delete records from tables that reference the occasion directly.
  -- ***********************************************************
  DELETE FROM public.email_templates
    WHERE occasion = oc;

  DELETE FROM public.email_wrappers
    WHERE occasion = oc;

  DELETE FROM public.information
    WHERE occasion = oc;

  DELETE FROM public.information_hidden
    WHERE occasion = oc;

  DELETE FROM public.log_notifications
    WHERE occasion = oc;

  DELETE FROM public.log_emails
    WHERE occasion = oc;

  DELETE FROM public.news
    WHERE occasion = oc;

  DELETE FROM public.occasion_users
    WHERE occasion = oc;

  DELETE FROM public.user_news
    WHERE occasion = oc;

  -- This is now safe because 'events' (which reference 'places') were deleted in Step 2.
  DELETE FROM public.places
    WHERE occasion = oc;

  DELETE FROM public.role_info
    WHERE occasion = oc;

  DELETE FROM public.user_groups
    WHERE "group" IN (SELECT id FROM public.user_group_info WHERE occasion = oc);

  DELETE FROM public.user_group_info
    WHERE occasion = oc;

  DELETE FROM public.exclusive_groups
    WHERE occasion = oc;

  -- ***********************************************************
  -- 6. Delete remaining records from the eshop schema.
  -- ***********************************************************
  DELETE FROM eshop.tickets
    WHERE occasion = oc;

  DELETE FROM eshop.spots
    WHERE occasion = oc;

  DELETE FROM eshop.products
    WHERE occasion = oc;

  DELETE FROM eshop.product_types
    WHERE occasion = oc;

  DELETE FROM eshop.planned_changes
    WHERE occasion = oc;

  DELETE FROM eshop.bank_account_requests
    WHERE occasion = oc;

  DELETE FROM eshop.blueprints
    WHERE occasion = oc;

  -- Delete orders (after their dependent rows have been removed)
  DELETE FROM eshop.orders
    WHERE occasion = oc;

  -- ***********************************************************
  -- 7. Null out referencing images.
  -- ***********************************************************
  UPDATE public.images
    SET occasion = NULL
    WHERE occasion = oc;

  -- ***********************************************************
  -- 8. Finally, delete the occasion itself.
  -- ***********************************************************
  DELETE FROM public.occasions
    WHERE id = oc;

  RETURN;
END;
$$;