create table public.product_catalog (
  product_id text not null,
  product_name character varying(150) null,
  category text null,
  price numeric(12, 2) null,
  duration_days integer null,
  product_capacity_gb double precision null,
  product_capacity_minutes double precision null,
  product_capacity_sms double precision null,
  product_capacity_vod double precision null,
  description text null,
  constraint product_catalog_pkey primary key (product_id),
  constraint product_catalog_product_id_key unique (product_id)
) TABLESPACE pg_default;

create table public.customer_profile (
  customer_id character varying(20) not null,
  plan_type character varying(20) null,
  device_brand character varying(50) null,
  avg_data_usage_gb double precision null,
  pct_video_usage double precision null,
  avg_call_duration double precision null,
  sms_freq integer null,
  monthly_spend numeric(12, 2) null,
  topup_freq integer null,
  travel_score double precision null,
  complaint_count integer null,
  target_offer character varying(50) null,
  constraint customer_profile_pkey primary key (customer_id)
) TABLESPACE pg_default;

create table public.login (
  id uuid not null default gen_random_uuid (),
  user_id uuid not null,
  username character varying(50) null,
  role text null default 'admin'::text,
  last_login timestamp with time zone null,
  created_at timestamp with time zone null default now(),
  constraint login_pkey primary key (id),
  constraint login_user_id_key unique (user_id),
  constraint login_username_key unique (username),
  constraint login_user_id_fkey foreign KEY (user_id) references auth.users (id) on delete CASCADE,
  constraint login_role_check check ((role = 'admin'::text))
) TABLESPACE pg_default;