import { useRouter } from "expo-router";
import { useEffect } from "react";
import { supabase } from "../services/supabase/client";
import { UserSession, useSessionStore } from "../store/useSessionStore";

export const redirectAuth = () => {
  const setSession = useSessionStore((state) => state.setSession);
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const userSession: UserSession = {
          name: session?.user.user_metadata.name,
          email: session?.user.user_metadata.email,
          phone: session?.user.user_metadata.phone,
          id: session?.user.id || "",
        };

        if (session) {
          setSession(userSession);
          router.replace("/(drawer)/main");
        } else if (event === "SIGNED_IN") {
          router.replace("/(drawer)/main");
        } else if (!session) {
          router.replace("/auth");
          setSession(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);
};
