import { SignUpType } from "@/src/types/SignUpType";
import { supabase } from "../../services/supabase/client";
import { Database } from "@/src/services/supabase/database.types";

export default async function SignUpQuery(dataFromUser: SignUpType) {
  try {
    const { data: dataFromSignUp, error } = await supabase.auth.signUp({
      email: dataFromUser.email,
      password: dataFromUser.password,
      options: {
        data: {
          name: dataFromUser.name,
          phone: dataFromUser.phone,
        },
      },
    });

    console.log("Sign-up data:", dataFromSignUp);

    if (error) {
      console.log("Sign-up error:", error);
      throw error;
    }

    const userId = dataFromSignUp.user?.id;

    if (!dataFromSignUp.user) {
      throw new Error("User data is missing after sign-up.");
    }

    const userData: Database["public"]["Tables"]["users"]["Insert"] = {
      id: userId || "",
      email: dataFromSignUp.user?.email || "",
      name: dataFromUser.name || "Name not available", // Ensure value exists
      phone: dataFromUser.phone || "Phone not available", // Ensure value exists
    };

    console.log("User data to insert:", userData); // Log data before insertion

    const { data, error: dbError } = await supabase
      .from("users")
      .insert(userData)
      .select();
    console.log("Database insert data:", data);

    if (dbError) {
      console.log("Database insert error:", dbError);
      throw new Error("Something went wrong while inserting user data.");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log("An unexpected error occurred:", error.message); // Log only the message
    } else {
      console.log("An unexpected error occurred:", error);
    }
  }
}
