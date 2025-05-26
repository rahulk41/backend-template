// Environment variables type definition
export interface AppEnv {
  // Database
  DATABASE_URL: string;
  PORT: string;
  
  // Supabase Configuration
  SUPABASE_ANON_KEY: string;
  SUPABASE_SERVICE_KEY: string;
  SUPABASE_URL: string;
  SUPABASE_STORAGE_URL: string;
  SUPABASE_ACCESS_ID: string;
  SUPABASE_ACCESS_KEY: string;
  SUPABASE_REGION: string;
  BUCKET_NAME: string;
  
  // User JWT Configuration
  USER_JWT_SECRET: string;
  USER_JWT_REFRESH_SECRET: string;
  USER_JWT_EXPIRE: string;
  USER_JWT_REFRESH_EXPIRE: string;
  
  // Admin JWT Configuration
  ADMIN_JWT_SECRET: string;
  ADMIN_JWT_REFRESH_SECRET: string;
  ADMIN_JWT_EXPIRE: string;
  ADMIN_JWT_REFRESH_EXPIRE: string;
  
  // OTP JWT Configuration
  OTP_JWT_SECRET: string;
  OTP_JWT_EXPIRE: string;
  
  // Email Configuration
  EMAIL_API_KEY: string;
  EMAIL: string;
  BCC?: string;
}

// Type-safe environment loader with validation
export function loadEnv(): AppEnv {
  const requiredEnvs: (keyof AppEnv)[] = [
    'DATABASE_URL',
    'PORT',
    'SUPABASE_ANON_KEY',
    'SUPABASE_SERVICE_KEY',
    'SUPABASE_URL',
    'SUPABASE_STORAGE_URL',
    'SUPABASE_ACCESS_ID',
    'SUPABASE_ACCESS_KEY',
    'SUPABASE_REGION',
    'BUCKET_NAME',
    'USER_JWT_SECRET',
    'USER_JWT_REFRESH_SECRET',
    'USER_JWT_EXPIRE',
    'USER_JWT_REFRESH_EXPIRE',
    'ADMIN_JWT_SECRET',
    'ADMIN_JWT_REFRESH_SECRET',
    'ADMIN_JWT_EXPIRE',
    'ADMIN_JWT_REFRESH_EXPIRE',
    'OTP_JWT_SECRET',
    'OTP_JWT_EXPIRE',
    'EMAIL_API_KEY',
    'EMAIL',
  ];

  // Check for missing environment variables
  const missingEnvs = requiredEnvs.filter(env => !process.env[env]);
  
  if (missingEnvs.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvs.join(', ')}`);
  }

  return {
    DATABASE_URL: process.env.DATABASE_URL!,
    PORT: process.env.PORT!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY!,
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_STORAGE_URL: process.env.SUPABASE_STORAGE_URL!,
    SUPABASE_ACCESS_ID: process.env.SUPABASE_ACCESS_ID!,
    SUPABASE_ACCESS_KEY: process.env.SUPABASE_ACCESS_KEY!,
    SUPABASE_REGION: process.env.SUPABASE_REGION!,
    BUCKET_NAME: process.env.BUCKET_NAME!,
    USER_JWT_SECRET: process.env.USER_JWT_SECRET!,
    USER_JWT_REFRESH_SECRET: process.env.USER_JWT_REFRESH_SECRET!,
    USER_JWT_EXPIRE: process.env.USER_JWT_EXPIRE!,
    USER_JWT_REFRESH_EXPIRE: process.env.USER_JWT_REFRESH_EXPIRE!,
    ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET!,
    ADMIN_JWT_REFRESH_SECRET: process.env.ADMIN_JWT_REFRESH_SECRET!,
    ADMIN_JWT_EXPIRE: process.env.ADMIN_JWT_EXPIRE!,
    ADMIN_JWT_REFRESH_EXPIRE: process.env.ADMIN_JWT_REFRESH_EXPIRE!,
    OTP_JWT_SECRET: process.env.OTP_JWT_SECRET!,
    OTP_JWT_EXPIRE: process.env.OTP_JWT_EXPIRE!,
    EMAIL_API_KEY: process.env.EMAIL_API_KEY!,
    EMAIL: process.env.EMAIL!,
    BCC: process.env.BCC!,
  };
}

// Usage with Hono
// Option 1: Using with Hono bindings
export type HonoEnv = {
  Bindings: AppEnv;
};

// Option 2: Global env instance
export const env = loadEnv();
