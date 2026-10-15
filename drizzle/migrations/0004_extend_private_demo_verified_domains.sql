CREATE OR REPLACE FUNCTION public.private_demo_email_allowed(_email text)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $$ SELECT _email IS NOT NULL AND (lower(split_part(_email, '@', 2)) IN ('bethelchambers.com', 'beyondhorizons.sg') AND length(_email) - length(replace(_email, '@', '')) = 1 OR EXISTS (SELECT 1 FROM public.private_demo_access a WHERE a.email = lower(_email) AND a.enabled)); $$;
REVOKE ALL ON FUNCTION public.private_demo_email_allowed(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.private_demo_email_allowed(text) TO service_role;
CREATE OR REPLACE FUNCTION public.has_private_demo_access()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $$ SELECT EXISTS (SELECT 1 FROM auth.users u WHERE u.id = auth.uid() AND u.email_confirmed_at IS NOT NULL AND public.private_demo_email_allowed(u.email)); $$;