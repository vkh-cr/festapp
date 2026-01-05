ALTER TABLE eshop.products DROP COLUMN IF EXISTS title_short;
CREATE OR REPLACE FUNCTION public.get_products_and_types(p_occasion_id bigint)
RETURNS json AS $$
DECLARE
  product_types json;
  products json;
BEGIN
  -- Fetch product types filtered by occasion.
  SELECT json_agg(
           json_build_object(
             'id', pt.id,
             'type', pt.type
           )
         )
    INTO product_types
  FROM eshop.product_types pt
  WHERE pt.occasion = p_occasion_id;

  -- Fetch products whose product_type is in the filtered product types.
  SELECT json_agg(
           json_build_object(
             'id', p.id,
             'title', p.title,
             'short_title', p.data->>'short_title',
             'product_type', p.product_type,
             'data', p.data
           )
         )
    INTO products
  FROM eshop.products p
  WHERE p.product_type IN (
    SELECT pt.id
    FROM eshop.product_types pt
    WHERE pt.occasion = p_occasion_id
  );

  RETURN json_build_object(
    'product_types', COALESCE(product_types, '[]'::json),
    'products', COALESCE(products, '[]'::json)
  );
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE FUNCTION get_ticket_details_for_generating(ticket_id_input BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    result JSONB;
BEGIN
    SELECT jsonb_build_object(
        -- 1. Build the 'ticket' key
        'ticket', (
            SELECT to_jsonb(t_detail)
            FROM (
                SELECT
                    t.id,
                    t.ticket_symbol,
                    t.occasion,
                    t.note,
                    t.state,
                    b.title AS table_title,
                    -- Subquery for Spot/Product details
                    (
                        SELECT jsonb_agg(ticket_prod)
                        FROM (
                            SELECT
                                opt2.id,
                                opt2.product,
                                s.title AS spot_title,
                                p.data->>'short_title' AS short_title,
                                p.title AS product_title, 
                                (
                                    SELECT g.value->>'title'
                                    FROM jsonb_array_elements(bp.groups) AS g(value)
                                    WHERE (g.value->>'id')::bigint = (
                                        SELECT (o2.value->>'group')::bigint
                                        FROM jsonb_array_elements(bp.objects) AS o2(value)
                                        WHERE (o2.value->>'id')::bigint = s.id
                                          AND o2.value->>'type' = 'spot'
                                        LIMIT 1
                                    )
                                    LIMIT 1
                                ) AS spot_group_title
                            FROM eshop.order_product_ticket opt2
                            LEFT JOIN eshop.spots s
                                ON s.order_product_ticket = opt2.id
                            LEFT JOIN eshop.products p
                                ON p.id = opt2.product
                            LEFT JOIN eshop.product_types pt 
                                ON pt.id = p.product_type
                            LEFT JOIN eshop.blueprints bp
                                ON bp.id = s.blueprint
                            WHERE opt2.ticket = t.id
                              AND NOT (pt.type = 'spot' AND s.title IS NULL)
                        ) ticket_prod
                    ) AS order_product_ticket,

                    -- Subquery for Price (extracting from ord.data)
                    (
                      SELECT COALESCE(SUM((prod->>'price')::numeric), 0)
                      FROM jsonb_array_elements(ord.data->'tickets') ticket_json,
                           jsonb_array_elements(ticket_json->'products') prod
                      WHERE (ticket_json->>'id')::bigint = t.id
                    ) AS price,

                    -- Subquery for Currency (extracting from ord.data)
                    (
                      SELECT (prod->>'currency_code')
                      FROM jsonb_array_elements(ord.data->'tickets') ticket_json,
                           jsonb_array_elements(ticket_json->'products') prod
                      WHERE (ticket_json->>'id')::bigint = t.id
                      LIMIT 1
                    ) AS currency_code
            ) t_detail
        ),

        -- 2. Build the 'occasion' key (dumps the whole occasion row including 'features')
        'occasion', to_jsonb(o)
    )
    INTO result
    FROM eshop.tickets t
    -- Join Occasion to get the occasion object
    JOIN public.occasions o
        ON o.id = t.occasion
    -- Join Blueprint for the table title
    LEFT JOIN eshop.blueprints b
        ON b.occasion = o.id
    -- Join Order Tables to expose 'ord.data' for the ticket sub-calculations above
    LEFT JOIN eshop.order_product_ticket opt
        ON opt.ticket = t.id
    LEFT JOIN eshop.orders ord
        ON ord.id = opt."order"
    WHERE t.id = ticket_id_input;

    RETURN result;
END;
$$;CREATE OR REPLACE FUNCTION public.get_products_and_types_for_edit(occasion_link text)
RETURNS json LANGUAGE plpgsql
SECURITY DEFINER AS $$
DECLARE
  product_types json;
  products json;
  inventory_pools_data json;
  inventory_contexts_data json;
  product_inventory_contexts_data json;
  forms_data json;
  occ_id bigint;
BEGIN
  -- Resolve occasion_id from the provided occasion_link
  SELECT id
    INTO occ_id
  FROM public.occasions
  WHERE link = occasion_link;

  -- If the occasion link is invalid, raise an exception.
  IF occ_id IS NULL THEN
    RAISE EXCEPTION 'Occasion not found for link: %', occasion_link;
  END IF;

  -- Verify if the current user is an editor for the order's occasion
  IF NOT get_is_editor_order_view_on_occasion(occ_id) THEN
      RETURN jsonb_build_object('code', 403, 'message', 'User is not authorized to view this.');
  END IF;

-- Fetch all product types for the given occasion
  SELECT json_agg(
           json_build_object(
             'id', pt.id,
             'type', pt.type,
             'title', pt.title
           )
         )
    INTO product_types
  FROM eshop.product_types pt
  WHERE pt.occasion = occ_id;

  -- Fetch all products for the given occasion, including form IDs
  SELECT json_agg(
           json_build_object(
             'id', p.id,
             'title', p.title,
             'description', p.description,
             'short_title', p.data->>'short_title',
             'product_type', p.product_type,
             'data', p.data,
             'price', p.price,
             'currency_code', p.currency_code,
             'is_hidden', p.is_hidden,
             'order', p."order",
             'maximum', p.maximum,
             'form_ids', (
               SELECT COALESCE(json_agg(DISTINCT ff.form), '[]'::json)
               FROM public.form_fields ff
               WHERE ff.product_type = p.product_type
             ),
             'ordered_count', (
               SELECT count(*)
               FROM eshop.order_product_ticket opt
               WHERE opt.product = p.id
             ),
             'paid_count', (
               SELECT count(*)
               FROM eshop.order_product_ticket opt
               JOIN eshop.orders o ON o.id = opt.order
               WHERE opt.product = p.id
                 AND o.state = 'paid'
             ),
             'sent_count', (
               SELECT count(*)
               FROM eshop.order_product_ticket opt
               JOIN eshop.orders o ON o.id = opt.order
               WHERE opt.product = p.id
                 AND o.state = 'sent'
             )
           )
         )
    INTO products
  FROM eshop.products p
  WHERE p.product_type IN (
    SELECT pt.id
    FROM eshop.product_types pt
    WHERE pt.occasion = occ_id
  );

  -- Fetch all inventory pools for the occasion
  SELECT json_agg(ip.*)
  INTO inventory_pools_data
  FROM public.inventory_pools ip
  WHERE ip.occasion = occ_id;

  -- Fetch all inventory contexts for the occasion
  SELECT json_agg(ic.*)
  INTO inventory_contexts_data
  FROM public.inventory_contexts ic
  JOIN public.inventory_pools ip ON ic.inventory_pool = ip.id
  WHERE ip.occasion = occ_id;

  -- Fetch all links between products and inventory contexts for the occasion
  SELECT json_agg(pic.*)
  INTO product_inventory_contexts_data
  FROM eshop.product_inventory_contexts pic
  JOIN eshop.products p ON pic.product = p.id
  JOIN eshop.product_types pt ON p.product_type = pt.id
  WHERE pt.occasion = occ_id;

  -- Fetch only the id, title, and link for each form associated with the occasion
  SELECT json_agg(
           json_build_object(
             'id', f.id,
             'title', f.title,
             'link', f.link
           )
         )
    INTO forms_data
  FROM public.forms f
  WHERE f.occasion = occ_id;

  RETURN json_build_object(
    'product_types', COALESCE(product_types, '[]'::json),
    'products', COALESCE(products, '[]'::json),
    'inventory_pools', COALESCE(inventory_pools_data, '[]'::json),
    'inventory_contexts', COALESCE(inventory_contexts_data, '[]'::json),
    'product_inventory_contexts', COALESCE(product_inventory_contexts_data, '[]'::json),
    'forms', COALESCE(forms_data, '[]'::json)
  );
END;
$$;CREATE OR REPLACE FUNCTION get_user_inventory()
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_user_id UUID;
    v_result JSONB;
BEGIN
    -- 1. Get the current user's ID.
    v_user_id := auth.uid();
    IF v_user_id IS NULL THEN
        RAISE EXCEPTION 'User not authenticated. Cannot retrieve inventory.';
    END IF;

    -- 2. Create a definitive list of the user's tickets and associated products.
    -- This is the absolute source of truth for which products the user owns.
    WITH user_ticket_products AS (
        SELECT
            opt.id AS order_product_ticket_id,
            opt.product AS product_id
        FROM public.occasion_users ou
        JOIN eshop.order_product_ticket opt ON ou.ticket = opt.ticket
        WHERE ou."user" = v_user_id
          AND ou.ticket IS NOT NULL
          AND opt.product IS NOT NULL
    ),

    -- 3. Find the user's assigned spots and their context ONLY for the tickets identified above.
    user_assigned_inventory AS (
        SELECT
            s.id AS id, -- Renamed to 'id' to match the provided CTE
            s.title AS title, -- Renamed to 'title'
            s.state AS state, -- Renamed to 'state'
            s.resource_slot AS resource_slot, -- Renamed to 'resource_slot'
            s.resource AS resource, -- Renamed to 'resource'
            s.inventory_context AS inventory_context, -- Renamed to 'inventory_context'
            ic.inventory_pool AS inventory_pool, -- Renamed to 'inventory_pool'
            utp.product_id
        FROM eshop.spots s
        JOIN user_ticket_products utp ON s.order_product_ticket = utp.order_product_ticket_id
        JOIN public.inventory_contexts ic ON s.inventory_context = ic.id
    ),

    -- 4. Fetch the full data for each entity, strictly filtering by the IDs gathered above.

    -- MODIFIED: Fetches products STRICTLY from the user's tickets.
    products_json AS (
        SELECT
            jsonb_object_agg(p.id, jsonb_build_object(
                'id', p.id, 'title', p.title, 'description', p.description, 'price', p.price, 'data', p.data,
                'product_type', p.product_type, 'occasion', p.occasion, 'is_hidden', p.is_hidden,
                'currency_code', p.currency_code, 'order', p."order",
                'maximum', p.maximum, 'is_dynamically_available', is_product_dynamically_available(p.id)
            )) AS data
        FROM eshop.products p
        WHERE p.id IN (SELECT DISTINCT product_id FROM user_ticket_products)
    ),

    -- MODIFIED: Fetches PIC records using a precise (context, product) match from the user's assigned spots.
    -- This is the most minimal possible query for this data.
    product_inventory_contexts_json AS (
        SELECT jsonb_object_agg(pic.id, to_jsonb(pic)) AS data
        FROM eshop.product_inventory_contexts pic
        WHERE (pic.inventory_context, pic.product) IN (
            SELECT DISTINCT inventory_context, product_id FROM user_assigned_inventory -- Updated column name
        )
    ),

    -- Build the JSON for contexts, ensuring the 'spots' array is correctly populated.
    contexts_json AS (
        SELECT
            jsonb_object_agg(ic.id, jsonb_build_object(
                'id', ic.id, 'order', ic."order", 'block_date', ic.block_date, 'title', ic.title,
                'data', ic.data, 'inventory_pool', ic.inventory_pool,
                'spots', (
                    SELECT COALESCE(jsonb_agg(to_jsonb(t) ORDER BY t.id), '[]'::jsonb) -- Updated column name
                    FROM (
                        SELECT uai.id, uai.title, uai.state, uai.resource_slot, uai.resource, uai.product_id -- Updated column names
                        FROM user_assigned_inventory uai
                        WHERE uai.inventory_context = ic.id -- Updated column name
                    ) t
                )
            )) AS data
        FROM public.inventory_contexts ic
        WHERE ic.id IN (SELECT DISTINCT inventory_context FROM user_assigned_inventory) -- Updated column name
    ),

    -- Pools, Places, and Resources are filtered based on the derived inventory.
    pools_json AS (
        SELECT jsonb_object_agg(p.id, jsonb_strip_nulls(jsonb_build_object(
            'id', p.id, 'data', p.data, 'title', p.title, 'description', p.description,
            'type', p.type, 'sellable_capacity', p.sellable_capacity, 'occasion', p.occasion
        ))) AS data
        FROM public.inventory_pools p
        WHERE p.id IN (SELECT DISTINCT inventory_pool FROM user_assigned_inventory) -- Updated column name
    ),
    places_json AS (
        SELECT jsonb_object_agg(pl.id, to_jsonb(pl)) AS data
        FROM public.places pl
        JOIN (
            SELECT DISTINCT (ip.data->>'place_id')::bigint AS id
            FROM public.inventory_pools ip
            WHERE ip.id IN (SELECT DISTINCT inventory_pool FROM user_assigned_inventory) -- Updated column name
              AND ip.data ? 'place_id' AND ip.data->>'place_id' IS NOT NULL
        ) AS place_ids ON pl.id = place_ids.id
    ),
    resources_json AS (
        SELECT jsonb_object_agg(r.id, to_jsonb(r)) AS data
        FROM public.resources r
        WHERE r.id IN (SELECT DISTINCT resource FROM user_assigned_inventory WHERE resource IS NOT NULL) -- Updated column name
    )

    -- 5. Assemble the final, minimal JSON object.
    SELECT jsonb_build_object(
        'inventory_contexts', COALESCE((SELECT data FROM contexts_json), '{}'::jsonb),
        'inventory_pools', COALESCE((SELECT data FROM pools_json), '{}'::jsonb),
        'resources', COALESCE((SELECT data FROM resources_json), '{}'::jsonb),
        'products', COALESCE((SELECT data FROM products_json), '{}'::jsonb),
        'product_inventory_contexts', COALESCE((SELECT data FROM product_inventory_contexts_json), '{}'::jsonb),
        'places', COALESCE((SELECT data FROM places_json), '{}'::jsonb)
    )
    INTO v_result;

    -- 6. Return the final object.
    RETURN v_result;

END;
$$;CREATE OR REPLACE FUNCTION get_app_config_v216(data_in jsonb)
RETURNS jsonb
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
AS $$
DECLARE
    org_id bigint := (data_in->>'organization')::bigint;
    link_txt text := data_in->>'link';
    form_link text := data_in->>'form_link';
    unit_id bigint := (data_in->>'unit_id')::bigint;
    platform_info jsonb := data_in->'platform';
    platform_name text := platform_info->>'platform';
    occasionId bigint;
    default_unit bigint;
    editor_unit_id bigint;
    is_open_bool BOOLEAN;
    is_app_supported_bool BOOLEAN := FALSE;
    occasion_user occasion_users%rowtype;
    unit_user unit_users%rowtype;
    is_admin_bool BOOLEAN;
    occasion_link text;
    version_recommended text;
    version_link text;
    occasion_unit bigint;
    bank_account_ids bigint[];
    occasion_json jsonb;
    unit_json jsonb;
    user_info_json jsonb;
    org_json jsonb;
    user_groups_json jsonb;
    is_editor_view_on_occasion_bool BOOLEAN;
    user_occasions_json jsonb;
    user_units_json jsonb;
    current_user_id UUID := auth.uid();
BEGIN
    -- Log the request details in log_app_config table
    INSERT INTO public.log_app_config (organization, platform)
    VALUES (org_id, platform_info);

    -- Map "pwa" to "web" for platform consistency
    IF platform_name = 'pwa' THEN
        platform_name := 'web';
    END IF;

    -- =========================================================
    -- RESOLVE CONTEXT (Occasion vs Unit)
    -- Priority: Form/Link > Representative Occasion > Unit ID > Default Occasion
    -- =========================================================

    -- 1. Try to find occasion via form_link
    IF form_link IS NOT NULL AND form_link <> '' THEN
        SELECT forms.occasion, occasions.link
          INTO occasionId, occasion_link
        FROM forms
        JOIN occasions ON forms.occasion = occasions.id
        WHERE forms.link = form_link
          AND occasions.organization = org_id;
    END IF;

    -- 2. If no occasion found yet, try via link_txt
    IF occasionId IS NULL AND link_txt IS NOT NULL AND link_txt <> '' THEN
        SELECT id, link
          INTO occasionId, occasion_link
        FROM occasions
        WHERE link = link_txt
          AND organization = org_id;

        -- If link_txt is provided but *not* found, this is a hard 404.
        IF occasionId IS NULL THEN
            RETURN json_build_object(
                'code', 404,
                'message', 'Occasion not found'
            );
        END IF;
    END IF;

    -- 3. If no specific link found, check for REPRESENTATIVE OCCASION
    -- This now overrides unit_id logic as requested.
    IF occasionId IS NULL THEN
        SELECT (data->>'REPRESENTATIVE_OCCASION')::bigint
          INTO occasionId
        FROM organizations
        WHERE id = org_id;

        -- If found, fetch its link for consistency
        IF occasionId IS NOT NULL THEN
            SELECT link INTO occasion_link
            FROM occasions
            WHERE id = occasionId AND organization = org_id;
        END IF;
    END IF;

    -- 4. If no occasion (and no Representative Occasion), try to use unit_id
    IF occasionId IS NULL AND unit_id IS NOT NULL THEN
        occasionId := NULL; -- Ensure no occasion is loaded.

        -- 1. Try to use the provided unit_id
        default_unit := unit_id;

        -- 2. Fetch unit details to check for existence
        SELECT json_build_object('id', u.id, 'title', u.title)
            INTO unit_json
        FROM units u
        WHERE u.id = default_unit;

        -- 3. Fetch the user's relationship with the determined unit (if any)
        SELECT *
            INTO unit_user
        FROM unit_users
        WHERE unit = default_unit
            AND "user" = current_user_id;

    -- 5. If no occasion and no unit found yet, try Default Occasion
    ELSIF occasionId IS NULL THEN
        -- Try to get the DEFAULT_OCCASION (Representative was already checked in step 3)
        SELECT (data->>'DEFAULT_OCCASION')::bigint
          INTO occasionId
        FROM organizations
        WHERE id = org_id;

        IF occasionId IS NOT NULL THEN
            -- Default occasion exists; fetch its link
            SELECT link
              INTO occasion_link
            FROM occasions
            WHERE id = occasionId AND organization = org_id;
        END IF;
    END IF;

    -- =========================================================
    -- GATHER DATA
    -- =========================================================

    -- Retrieve version_recommended and version_link
    SELECT
        item->>'prompt',
        item->>'link'
    INTO
        version_recommended,
        version_link
    FROM
        public.organizations,
        jsonb_array_elements(data->'PLATFORMS') AS item
    WHERE
        id = org_id AND item->>'platform' = platform_name
    LIMIT 1;

    IF occasionId IS NOT NULL THEN
        -- Process occasion-related queries only if an occasion was determined

        -- Get the is_open status for the occasion
        SELECT is_open
          INTO is_open_bool
        FROM occasions
        WHERE id = occasionId;

        -- Get the occasion user record if it exists
        SELECT *
          INTO occasion_user
        FROM occasion_users
        WHERE occasion = occasionId
          AND "user" = current_user_id;

        -- Retrieve the unit ID from the occasion
        SELECT unit
          INTO occasion_unit
        FROM occasions
        WHERE id = occasionId;

        -- Get the unit user record if it exists
        SELECT *
          INTO unit_user
        FROM unit_users
        WHERE unit = occasion_unit
          AND "user" = current_user_id;

        -- Check if the current user is an admin on the occasion
        is_admin_bool := get_is_admin_on_occasion(occasionId);

        -- Check if the current user has editor_view permissions on the occasion
        is_editor_view_on_occasion_bool := get_is_editor_view_on_occasion(occasionId);

        -- Retrieve IS_APP_SUPPORTED from Organization data. Defaults to FALSE.
        SELECT COALESCE((data->>'IS_APP_SUPPORTED')::boolean, FALSE)
          INTO is_app_supported_bool
        FROM organizations
        WHERE id = org_id;

        -- If the occasion is not open, enforce access restrictions
        -- BUT bypass this check if is_app_supported_bool is FALSE.
        IF is_open_bool = FALSE AND is_app_supported_bool = TRUE THEN
            IF is_editor_view_on_occasion_bool <> TRUE
               AND (SELECT get_is_editor_order_view_on_occasion(occasionId)) <> TRUE
               AND (SELECT get_is_editor_on_unit(occasion_unit)) <> TRUE THEN
                RETURN json_build_object(
                    'code', 403,
                    'message', 'Access forbidden',
                    'link', occasion_link,
                    'version_recommended', version_recommended,
                    'version_link', version_link,
                    'unit_user', COALESCE(row_to_json(unit_user)::jsonb, NULL)
                );
            END IF;
        END IF;

        -- If the occasion user record is not found and the user is authenticated, add the user to the occasion
        IF occasion_user IS NULL AND current_user_id IS NOT NULL THEN
            IF is_app_supported_bool IS TRUE 
               OR (unit_user.is_manager IS TRUE OR unit_user.is_editor IS TRUE OR unit_user.is_editor_view IS TRUE) THEN
                PERFORM add_user_to_occasion(occasionId, current_user_id);

                SELECT *
                  INTO occasion_user
                FROM occasion_users
                WHERE occasion = occasionId
                  AND "user" = current_user_id;
            END IF;
        END IF;
    ELSE
        -- If no occasion is set (because a specific unit was used and no Rep Occasion existed), use the unit as the context
        occasion_unit := default_unit;
        is_admin_bool := false;
    END IF;

    -- Retrieve unit_user again in case the user was added and now belongs to the unit
    IF unit_user IS NULL AND occasion_unit IS NOT NULL AND current_user_id IS NOT NULL THEN
        SELECT *
          INTO unit_user
        FROM unit_users
        WHERE unit = occasion_unit
          AND "user" = current_user_id;
    END IF;

    -- Fetch list of bank account IDs where the user is an admin
    SELECT array_agg(bank_account)
      INTO bank_account_ids
    FROM eshop.bank_account_users
    WHERE "user" = current_user_id
      AND is_admin = true;

    -- Fetch full occasion details as a JSON object if an occasion is set
    IF occasionId IS NOT NULL THEN
        SELECT row_to_json(o)
          INTO occasion_json
        FROM occasions o
        WHERE o.id = occasionId;
    ELSE
        occasion_json := '{}'::jsonb;
    END IF;

    -- Fetch full unit details as a JSON object
    IF occasion_unit IS NOT NULL THEN
        SELECT json_build_object('id', u.id, 'title', u.title, 'data', u.data)
          INTO unit_json
        FROM units u
        WHERE u.id = occasion_unit;
    ELSE
        unit_json := '{}'::jsonb;
    END IF;

    -- Fetch occasions for the user based on the specified logic
    IF occasion_unit IS NOT NULL AND current_user_id IS NOT NULL THEN
        IF is_editor_view_on_occasion_bool OR (current_user_id IS NOT NULL AND (SELECT get_is_editor_on_unit(occasion_unit))) THEN
            -- If user is an editor or unit editor, get all occasions for the unit
            SELECT json_agg(json_build_object('id', o.id, 'title', o.title, 'link', o.link, 'start_time', o.start_time, 'end_time', o.end_time) ORDER BY o.start_time DESC)
            INTO user_occasions_json
            FROM (
                SELECT * FROM public.occasions
                WHERE unit = occasion_unit
                ORDER BY start_time DESC
                LIMIT 100
            ) o;
        ELSE
            -- Otherwise, get only occasions the user is explicitly on for that unit
            -- AND where they have privileged access (manager, editor, etc.)
            SELECT json_agg(
                json_build_object(
                    'id', o.id, 
                    'title', o.title, 
                    'link', o.link, 
                    'start_time', o.start_time, 
                    'end_time', o.end_time
                ) ORDER BY o.start_time DESC
            )
            INTO user_occasions_json
            FROM (
                 SELECT o.*
                 FROM public.occasions o
                 JOIN public.occasion_users ou ON ou.occasion = o.id
                 WHERE ou."user" = current_user_id
                 AND o.unit = occasion_unit
                 AND (
                     ou.is_manager IS TRUE 
                     OR ou.is_editor IS TRUE 
                     OR ou.is_editor_view IS TRUE 
                     OR ou.is_editor_order IS TRUE 
                     OR ou.is_editor_order_view IS TRUE
                 )
                 ORDER BY o.start_time DESC
                 LIMIT 100
            ) o;
        END IF;
    END IF;

    -- Fetch units for the user based on unit rights or occasion rights
    SELECT json_agg(jsonb_build_object('id', u.id, 'title', u.title) ORDER BY u.title)
    INTO user_units_json
    FROM public.units u
    WHERE (
        EXISTS (
            SELECT 1 
            FROM public.unit_users uu 
            WHERE uu.unit = u.id 
            AND uu."user" = current_user_id 
            AND uu.is_editor_view = TRUE
        )
        OR
        EXISTS (
            SELECT 1 
            FROM public.occasions o
            JOIN public.occasion_users ou ON ou.occasion = o.id
            WHERE o.unit = u.id 
            AND ou."user" = current_user_id
            AND (
                ou.is_manager IS TRUE 
                OR ou.is_editor IS TRUE 
                OR ou.is_editor_view IS TRUE 
                OR ou.is_editor_order IS TRUE 
                OR ou.is_editor_order_view IS TRUE
            )
        )
    );

    -- Fetch user information along with associated units and occasions
    SELECT row_to_json(ui)::jsonb || jsonb_build_object(
            'units', COALESCE(user_units_json, '[]'::jsonb),
            'occasions', user_occasions_json
          )
      INTO user_info_json
    FROM public.user_info ui
    WHERE ui.id = current_user_id;

    -- Fetch limited organization info
    SELECT json_build_object(
        'title', title,
        'APP_NAME', data->>'APP_NAME',
        'PLATFORMS', data->'PLATFORMS',
        'IS_REGISTRATION_ENABLED', data->'IS_REGISTRATION_ENABLED'
    ) INTO org_json
    FROM public.organizations
    WHERE id = org_id;

    -- Fetch the user's groups for the specific occasion
    IF occasionId IS NOT NULL THEN
        user_groups_json := public.get_user_groups(occasionId);
    END IF;

    RETURN json_build_object(
        'code', 200,
        'is_admin', is_admin_bool,
        'occasion_user', COALESCE(row_to_json(occasion_user)::jsonb, NULL),
        'unit_user', COALESCE(row_to_json(unit_user)::jsonb, NULL),
        'occasion', COALESCE(occasion_json, '{}'::jsonb),
        'unit', COALESCE(unit_json, '{}'::jsonb),
        'version_recommended', version_recommended,
        'version_link', version_link,
        'bank_accounts_admin', COALESCE(bank_account_ids, '{}'),
        'user_info', COALESCE(user_info_json, '{}'::jsonb),
        'organization', COALESCE(org_json::jsonb, '{}'::jsonb),
        'groups', COALESCE(user_groups_json, '{}'::jsonb)
    );
END;
$$;
