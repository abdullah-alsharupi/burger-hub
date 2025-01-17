import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import FormInput from "@/src/components/ui/FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpType } from "@/src/types/SignUpType";
import { useSessionStore } from "@/src/store/useSessionStore";
import SignUpQuery from "@/src/queries/auth/signUp";
import Button from "../../ui/Button";
import { UserSchema } from "@/src/types/validations/user";
import { useCustomToast } from "@/src/hooks/useCustomToast";
import { router } from "expo-router"; // Import router
const { width } = Dimensions.get("window");

const SignUp = () => {
  const showToast = useCustomToast();
  const { session, setSession } = useSessionStore();

  const { control, handleSubmit, setError } = useForm<SignUpType>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignUpType) => {
    try {
      if (!data.email || !data.password) {
        return setError("root", { message: "Check your sign-up information." });
      }
      const dataUser = await SignUpQuery(data);

      if (dataUser) {
        console.log("User signed up:", dataUser);
        // setSession({
        //   name: dataUser[0]?.name || "",
        //   phone: dataUser[0]?.phone,
        //   email: dataUser[0]?.email,
        //   id: dataUser[0]?.id,
        // });
        showToast("User registered successfully!", { type: "success" });
        console.log(" im session with sign up in success ", session);
      } else {
        showToast(" User already registered !", { type: "danger" });

        console.log("User signed up undefined:", dataUser);
      }
      console.log(" im session with sign up ", session);
    } catch (error) {
      console.error("Sign up error:", error);
      setError("root", { message: "An error occurred during sign up." });
    }
    console.log(" im session with sign up ", session);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.inputContainer}>
          <FormInput
            control={control}
            name="name"
            label="Name"
            secureTextEntry={false}
          />
          <FormInput
            control={control}
            name="phone"
            label="Phone"
            secureTextEntry={false}
          />
          <FormInput
            control={control}
            name="email"
            label="Email"
            secureTextEntry={false}
          />
          <FormInput
            control={control}
            name="password"
            label="Password"
            secureTextEntry
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          size="large"
          color="red"
          onClick={handleSubmit(onSubmit)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    width: width,
    alignItems: "center",
  },
  inputContainer: {
    width: width * 0.8,
    top: 20,
  },
  buttonContainer: {
    width: width,
    height: 50,
    top: 30,
    flex: 1,
  },
});
