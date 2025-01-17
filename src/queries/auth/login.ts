import { LogInType } from "@/src/types/LogInType";
import { supabase } from "../../services/supabase/client";

export default async function LogInQuery(dataFromUser: LogInType) {
  try {
    const { email, password } = dataFromUser;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data?.user);

    if (error) {
      console.error("Sign-in error:", error);
      throw new Error("Failed to sign in");
    }

    const userId = data.user?.id;

    if (!userId) {
      throw new Error("User ID is missing after sign-in");
    }

    return userId;
  } catch (error) {
    console.error("Error in LogInQuery:", error);
    throw error; // Rethrow the error for further handling
  }
}
