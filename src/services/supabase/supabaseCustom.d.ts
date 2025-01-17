import { PostgrestBuilder } from '@supabase/postgrest-js';
import { SupabaseClient } from '@supabase/supabase-js';

declare module '@supabase/supabase-js' {
  interface SupabaseClient {
    rpc<ResponseType, ParamsType>(
      fn: string,
      params?: ParamsType
    ): PostgrestBuilder<ResponseType>;
  }
}