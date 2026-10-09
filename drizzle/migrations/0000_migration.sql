DROP POLICY IF EXISTS "Anyone can insert cached translations" ON public.translation_cache;
DROP POLICY IF EXISTS "Anyone can read cached translations" ON public.translation_cache;
REVOKE ALL ON public.translation_cache FROM anon, authenticated;
GRANT ALL ON public.translation_cache TO service_role;