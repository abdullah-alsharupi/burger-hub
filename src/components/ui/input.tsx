import React from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { textStyles } from "../themed";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface InputProps extends TextInputProps {
  label?: string;
  description?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
  errorStyle?: object;
  searchBox?: boolean;
  style?: ViewStyle;
  icon?: (focused: boolean) => React.ReactNode;
  inputStyle?: ViewStyle;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onClickIcon?: () => void;
  border?: boolean;

}

const Input: React.FC<InputProps> = ({
  label,
  description,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  error,
  errorStyle,
  style,
  inputStyle,
  onBlur,
  multiline,
  searchBox,
  icon,
  onClickIcon,
  border,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[textStyles.small, styles.label]}>{label}</Text>}
      <View style={[styles.inputContainer, { borderWidth: border ? 0 :1 }]}>
        {searchBox && (
          <View style={styles.searchIconContainer}>
            <TouchableOpacity onPress={onClickIcon}>
              <Ionicons name="search-outline" size={24} color={"black"} />
            </TouchableOpacity>
          </View>
        )}
        <TextInput
          style={[
            styles.input,
            multiline && styles.multilineInput,
            inputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={'#00000080'}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          onBlur={(onBlur)}
          
           {...props}
        />
      </View>
      {description && <Text style={styles.description}>{description}</Text>}
      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginBottom: 8,
  },
  inputContainer: {
    borderColor: 'black',
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
    paddingVertical: 12,
    paddingHorizontal: 16,
    minHeight: 48,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  searchIconContainer: {
    position: "absolute",
    left: -20,
    top: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    ...textStyles.xsmall,
    marginTop: 6,
    color: 'black',
  },
  error: {
    color: "red",
    marginTop: 4,
  },
});

export default Input;