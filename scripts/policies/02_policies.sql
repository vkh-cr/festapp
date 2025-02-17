DROP POLICY IF EXISTS "Enable select for all" ON public.icons;
CREATE POLICY "Enable select for all" ON public.icons
AS PERMISSIVE FOR SELECT
TO public
USING (true);

DROP POLICY IF EXISTS "Enable select for managers and admins" ON public.email_templates;
CREATE POLICY "Enable select for managers and admins" ON public.email_templates
AS PERMISSIVE FOR SELECT
TO authenticated
USING ((get_is_manager_on_any_occasion() OR get_is_admin_on_organization(organization)));

DROP POLICY IF EXISTS "Enable all for editors" ON public.user_group_info;
CREATE POLICY "Enable all for editors" ON public.user_group_info
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable select to all auth" ON public.user_group_info;
CREATE POLICY "Enable select to all auth" ON public.user_group_info
AS PERMISSIVE FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "Enable all for editors" ON public.log_notifications;
CREATE POLICY "Enable all for editors" ON public.log_notifications
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable all for editors" ON public.information_hidden;
CREATE POLICY "Enable all for editors" ON public.information_hidden
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable all for editors" ON public.images;
CREATE POLICY "Enable all for editors" ON public.images
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable all for unit editors" ON public.images;
CREATE POLICY "Enable all for unit editors" ON public.images
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_unit(unit))
WITH CHECK (get_is_editor_on_unit(unit));

DROP POLICY IF EXISTS "Enable all for editors" ON public.event_groups;
CREATE POLICY "Enable all for editors" ON public.event_groups
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(( SELECT events.occasion
   FROM events
  WHERE (events.id = event_groups.event_parent))))
WITH CHECK (get_is_editor_on_occasion(( SELECT events.occasion
   FROM events
  WHERE (events.id = event_groups.event_parent))));

DROP POLICY IF EXISTS "Enable read for all" ON public.event_groups;
CREATE POLICY "Enable read for all" ON public.event_groups
AS PERMISSIVE FOR SELECT
TO public
USING (true);

DROP POLICY IF EXISTS "Enable all for admins" ON public.occasions;
CREATE POLICY "Enable all for admins" ON public.occasions
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_admin_on_organization(organization))
WITH CHECK (get_is_admin_on_organization(organization));

DROP POLICY IF EXISTS "Enable read for all" ON public.occasions;
CREATE POLICY "Enable read for all" ON public.occasions
AS PERMISSIVE FOR SELECT
TO public
USING (true);

DROP POLICY IF EXISTS "Enable all for editors" ON public.places;
CREATE POLICY "Enable all for editors" ON public.places
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable read for all" ON public.places;
CREATE POLICY "Enable read for all" ON public.places
AS PERMISSIVE FOR SELECT
TO public
USING (true);

DROP POLICY IF EXISTS "Enable all for managers" ON public.occasion_users;
CREATE POLICY "Enable all for managers" ON public.occasion_users
AS PERMISSIVE FOR ALL
TO authenticated
USING ((get_is_manager_on_occasion(occasion) OR get_is_admin_on_occasion(occasion)))
WITH CHECK ((get_is_manager_on_occasion(occasion) OR get_is_admin_on_occasion(occasion)));

DROP POLICY IF EXISTS "Enable read for editors" ON public.occasion_users;
CREATE POLICY "Enable read for editors" ON public.occasion_users
AS PERMISSIVE FOR SELECT
TO public
USING (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable select on own record" ON public.occasion_users;
CREATE POLICY "Enable select on own record" ON public.occasion_users
AS PERMISSIVE FOR SELECT
TO authenticated
USING ((auth.uid() = "user"));

DROP POLICY IF EXISTS "Enable all for editors" ON public.information;
CREATE POLICY "Enable all for editors" ON public.information
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable all for unit editors" ON public.information;
CREATE POLICY "Enable all for unit editors" ON public.information
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_unit(unit))
WITH CHECK (get_is_editor_on_unit(unit));

DROP POLICY IF EXISTS "Enable read for all" ON public.information;
CREATE POLICY "Enable read for all" ON public.information
AS PERMISSIVE FOR SELECT
TO public
USING (true);

DROP POLICY IF EXISTS "Enable all for editors" ON public.news;
CREATE POLICY "Enable all for editors" ON public.news
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable read for all" ON public.news;
CREATE POLICY "Enable read for all" ON public.news
AS PERMISSIVE FOR SELECT
TO public
USING (true);

DROP POLICY IF EXISTS "Enable all for admins" ON public.exclusive_events;
CREATE POLICY "Enable all for admins" ON public.exclusive_events
AS PERMISSIVE FOR ALL
TO authenticated
USING ((get_my_claim('is_editor'::text) = 'true'::jsonb))
WITH CHECK ((get_my_claim('is_editor'::text) = 'true'::jsonb));

DROP POLICY IF EXISTS "Enable all for editors" ON public.exclusive_events;
CREATE POLICY "Enable all for editors" ON public.exclusive_events
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(( SELECT exclusive_groups.occasion
   FROM exclusive_groups
  WHERE (exclusive_groups.id = exclusive_events."group"))))
WITH CHECK (get_is_editor_on_occasion(( SELECT exclusive_groups.occasion
   FROM exclusive_groups
  WHERE (exclusive_groups.id = exclusive_events."group"))));

DROP POLICY IF EXISTS "Enable select to all auth" ON public.exclusive_events;
CREATE POLICY "Enable select to all auth" ON public.exclusive_events
AS PERMISSIVE FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "Enable all for editors" ON public.events;
CREATE POLICY "Enable all for editors" ON public.events
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable all for editors.old" ON public.events;
CREATE POLICY "Enable all for editors.old" ON public.events
AS PERMISSIVE FOR ALL
TO authenticated
USING ((get_my_claim('is_editor'::text) = 'true'::jsonb))
WITH CHECK ((get_my_claim('is_editor'::text) = 'true'::jsonb));

DROP POLICY IF EXISTS "Enable read for all" ON public.events;
CREATE POLICY "Enable read for all" ON public.events
AS PERMISSIVE FOR SELECT
TO public
USING (get_is_event_allowed(id));

DROP POLICY IF EXISTS "Enable all for editors" ON public.event_users_saved;
CREATE POLICY "Enable all for editors" ON public.event_users_saved
AS PERMISSIVE FOR ALL
TO authenticated
USING ((get_my_claim('is_editor'::text) = 'true'::jsonb))
WITH CHECK ((get_my_claim('is_editor'::text) = 'true'::jsonb));

DROP POLICY IF EXISTS "Enable all on own record" ON public.event_users_saved;
CREATE POLICY "Enable all on own record" ON public.event_users_saved
AS PERMISSIVE FOR ALL
TO authenticated
USING ((auth.uid() = "user"))
WITH CHECK ((auth.uid() = "user"));

DROP POLICY IF EXISTS "Enable all for editors" ON public.exclusive_groups;
CREATE POLICY "Enable all for editors" ON public.exclusive_groups
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable select to all auth" ON public.exclusive_groups;
CREATE POLICY "Enable select to all auth" ON public.exclusive_groups
AS PERMISSIVE FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "Enable all for admins" ON public.user_info;
CREATE POLICY "Enable all for admins" ON public.user_info
AS PERMISSIVE FOR ALL
TO authenticated
USING ((get_my_claim('is_admin'::text) = 'true'::jsonb))
WITH CHECK ((get_my_claim('is_admin'::text) = 'true'::jsonb));

DROP POLICY IF EXISTS "Enable all on own record" ON public.user_info;
CREATE POLICY "Enable all on own record" ON public.user_info
AS PERMISSIVE FOR ALL
TO authenticated
USING ((auth.uid() = id))
WITH CHECK ((auth.uid() = id));

DROP POLICY IF EXISTS "Enable read for editors" ON public.user_info;
CREATE POLICY "Enable read for editors" ON public.user_info
AS PERMISSIVE FOR SELECT
TO authenticated
USING ((get_my_claim('is_editor'::text) = 'true'::jsonb));

DROP POLICY IF EXISTS "Enable all for editors" ON public.user_groups;
CREATE POLICY "Enable all for editors" ON public.user_groups
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(( SELECT user_group_info.occasion
   FROM user_group_info
  WHERE (user_group_info.id = user_groups."group"))))
WITH CHECK (get_is_editor_on_occasion(( SELECT user_group_info.occasion
   FROM user_group_info
  WHERE (user_group_info.id = user_groups."group"))));

DROP POLICY IF EXISTS "Enable select to all auth" ON public.user_groups;
CREATE POLICY "Enable select to all auth" ON public.user_groups
AS PERMISSIVE FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "Enable all for editors" ON public.user_news;
CREATE POLICY "Enable all for editors" ON public.user_news
AS PERMISSIVE FOR ALL
TO authenticated
USING ((get_my_claim('is_editor'::text) = 'true'::jsonb))
WITH CHECK ((get_my_claim('is_editor'::text) = 'true'::jsonb));

DROP POLICY IF EXISTS "Enable all on own record" ON public.user_news;
CREATE POLICY "Enable all on own record" ON public.user_news
AS PERMISSIVE FOR ALL
TO authenticated
USING ((auth.uid() = "user"))
WITH CHECK ((auth.uid() = "user"));

DROP POLICY IF EXISTS "Enable all for editors" ON public.forms;
CREATE POLICY "Enable all for editors" ON public.forms
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable read for editor_view" ON public.forms;
CREATE POLICY "Enable read for editor_view" ON public.forms
AS PERMISSIVE FOR SELECT
TO authenticated
USING (get_is_editor_view_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable all for editors" ON public.event_roles;
CREATE POLICY "Enable all for editors" ON public.event_roles
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(( SELECT events.occasion
   FROM events
  WHERE (events.id = event_roles.event))))
WITH CHECK (get_is_editor_on_occasion(( SELECT events.occasion
   FROM events
  WHERE (events.id = event_roles.event))));

DROP POLICY IF EXISTS "Enable all for editors" ON public.event_users;
CREATE POLICY "Enable all for editors" ON public.event_users
AS PERMISSIVE FOR ALL
TO authenticated
USING ((get_my_claim('is_editor'::text) = 'true'::jsonb))
WITH CHECK ((get_my_claim('is_editor'::text) = 'true'::jsonb));

DROP POLICY IF EXISTS "Enable all on own record" ON public.event_users;
CREATE POLICY "Enable all on own record" ON public.event_users
AS PERMISSIVE FOR ALL
TO authenticated
USING ((auth.uid() = "user"))
WITH CHECK ((auth.uid() = "user"));

DROP POLICY IF EXISTS "Enable read for all" ON public.event_users;
CREATE POLICY "Enable read for all" ON public.event_users
AS PERMISSIVE FOR SELECT
TO public
USING (true);

DROP POLICY IF EXISTS "Enable select for auth" ON public.role_info;
CREATE POLICY "Enable select for auth" ON public.role_info
AS PERMISSIVE FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "Enable all for editors" ON public.form_fields;
CREATE POLICY "Enable all for editors" ON public.form_fields
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(( SELECT forms.occasion
   FROM forms
  WHERE (forms.id = form_fields.form))))
WITH CHECK (get_is_editor_on_occasion(( SELECT forms.occasion
   FROM forms
  WHERE (forms.id = form_fields.form))));

DROP POLICY IF EXISTS "Enable read for editor_view" ON public.form_fields;
CREATE POLICY "Enable read for editor_view" ON public.form_fields
AS PERMISSIVE FOR SELECT
TO authenticated
USING (get_is_editor_view_on_occasion(( SELECT forms.occasion
   FROM forms
  WHERE (forms.id = form_fields.form))));

-----------------------------------------------
--eshop----------------------------------------
-----------------------------------------------

DROP POLICY IF EXISTS "Enable all for editors" ON eshop.spots;
CREATE POLICY "Enable all for editors" ON eshop.spots
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable all for editors" ON eshop.blueprints;
CREATE POLICY "Enable all for editors" ON eshop.blueprints
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable all for editors" ON eshop.products;
CREATE POLICY "Enable all for editors" ON eshop.products
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable read for all" ON eshop.products;
CREATE POLICY "Enable read for all" ON eshop.products
AS PERMISSIVE FOR SELECT
TO public
USING (true);

DROP POLICY IF EXISTS "Enable all for editors" ON eshop.product_types;
CREATE POLICY "Enable all for editors" ON eshop.product_types
AS PERMISSIVE FOR ALL
TO authenticated
USING (get_is_editor_on_occasion(occasion))
WITH CHECK (get_is_editor_on_occasion(occasion));

DROP POLICY IF EXISTS "Enable read for all" ON eshop.product_types;
CREATE POLICY "Enable read for all" ON eshop.product_types
AS PERMISSIVE FOR SELECT
TO public
USING (true);