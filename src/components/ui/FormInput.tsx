import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { StyleSheet } from "react-native";
import Input, { InputProps } from "./input";
import { ViewStyle } from "react-native";

type FormInputProps<T extends FieldValues> = Omit<
  InputProps,
  "value" | "onChangeText" 
> & {
  control?: Control<T>;
  name: Path<T>;
  placeholder?: string;
  style?: ViewStyle;

};

function FormInput<T extends FieldValues>({
  placeholder,
  name,
  control,
  ...props
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Input
          {...props}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          error={error?.message}
          
        />
      )}
    />
  );
}
 
export default FormInput;