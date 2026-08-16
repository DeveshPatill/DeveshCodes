-- Enable RLS on enquiries table (if not already enabled)
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Drop existing insert policies for anon/authenticated if they exist (idempotent)
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.enquiries;
DROP POLICY IF EXISTS "Allow authenticated insert" ON public.enquiries;

-- Allow anonymous users to INSERT enquiries (uses anon key from server)
CREATE POLICY "Allow anonymous insert" ON public.enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Ensure authenticated users can also insert
CREATE POLICY "Allow authenticated insert" ON public.enquiries
  FOR INSERT
  TO authenticated
  WITH CHECK (true);