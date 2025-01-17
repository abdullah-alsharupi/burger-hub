import { supabase } from "../../services/supabase/client";
import { useSessionStore } from "../../store/useSessionStore";

export default async function signOut(): Promise<void> {
  const setSession = useSessionStore.getState().setSession;
  await supabase.auth.signOut();
  setSession(null);
}