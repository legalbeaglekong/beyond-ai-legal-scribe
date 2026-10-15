CREATE TABLE public.cp_reviews (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 user_id uuid NOT NULL DEFAULT auth.uid(),
 ref text NOT NULL,
 status text NOT NULL CHECK (status IN ('satisfied','waived','na','issue')),
 note text NOT NULL DEFAULT '',
 reviewer_name text NOT NULL,
 reviewer_email text NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now(),
 CHECK (length(trim(reviewer_name)) > 0),
 CHECK (length(trim(reviewer_email)) > 0)
);
GRANT SELECT, INSERT ON public.cp_reviews TO authenticated;
GRANT ALL ON public.cp_reviews TO service_role;
ALTER TABLE public.cp_reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Read own demo reviews" ON public.cp_reviews FOR SELECT TO authenticated USING ((select auth.uid()) = user_id);
CREATE POLICY "Append own demo reviews" ON public.cp_reviews FOR INSERT TO authenticated WITH CHECK ((select auth.uid()) = user_id);
CREATE INDEX cp_reviews_user_ref_date ON public.cp_reviews (user_id, ref, created_at DESC);