import { AuthError } from '@supabase/supabase-js';

export type AuthErrorWithMessage = AuthError & {
  message: string;
}; 