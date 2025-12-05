-- Product Simulations Table for Product Lab
-- This table stores AI simulation results for new product analysis

CREATE TABLE IF NOT EXISTS product_simulations (
  id BIGSERIAL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  price NUMERIC(12, 2) DEFAULT 0,
  duration_days INTEGER DEFAULT 30,
  data_capacity_gb NUMERIC(10, 2) DEFAULT 0,
  minutes NUMERIC(10, 2) DEFAULT 0,
  sms NUMERIC(10, 2) DEFAULT 0,
  vod_capacity_gb NUMERIC(10, 2) DEFAULT 0,
  match_score NUMERIC(5, 2) DEFAULT 0,
  estimated_recommendations INTEGER DEFAULT 0,
  conversion_rate NUMERIC(5, 2) DEFAULT 0,
  price_segment VARCHAR(50),
  target_users JSONB,
  recommendation TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_product_simulations_created_at ON product_simulations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_product_simulations_category ON product_simulations(category);
CREATE INDEX IF NOT EXISTS idx_product_simulations_match_score ON product_simulations(match_score DESC);

-- Add comment to table
COMMENT ON TABLE product_simulations IS 'Stores AI simulation results from Product Lab feature';
COMMENT ON COLUMN product_simulations.match_score IS 'AI calculated match score (0-100)';
COMMENT ON COLUMN product_simulations.target_users IS 'JSON array of target user segments with percentages';
COMMENT ON COLUMN product_simulations.estimated_recommendations IS 'Estimated number of users who would be recommended this product';

-- For Supabase, you can also add RLS (Row Level Security) policies if needed:
-- ALTER TABLE product_simulations ENABLE ROW LEVEL SECURITY;
-- 
-- -- Allow authenticated users to read all simulations
-- CREATE POLICY "Allow authenticated users to read simulations" 
--   ON product_simulations FOR SELECT 
--   TO authenticated 
--   USING (true);
-- 
-- -- Allow authenticated users to insert simulations
-- CREATE POLICY "Allow authenticated users to insert simulations" 
--   ON product_simulations FOR INSERT 
--   TO authenticated 
--   WITH CHECK (true);
-- 
-- -- Allow authenticated users to delete their own simulations (optional)
-- CREATE POLICY "Allow authenticated users to delete simulations" 
--   ON product_simulations FOR DELETE 
--   TO authenticated 
--   USING (true);

