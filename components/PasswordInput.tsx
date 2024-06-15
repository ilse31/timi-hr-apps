import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./FormInput";
import { Ionicons } from "@expo/vector-icons";

type PasswordInputProps = {
  label: string;
  value: string;
  isShowPassword: boolean;
  onChangeText: (text: string) => void;
  onToggleShowPassword: () => void;
};

const PasswordInput = ({
  label,
  value,
  isShowPassword,
  onChangeText,
  onToggleShowPassword,
}: PasswordInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Input
        value={value}
        placeholder={label}
        onChangeText={onChangeText}
        containerClassName='w-full'
        label={label}
        type={isShowPassword ? "text" : "password"}
        color='sky'
        rightNode={
          <Ionicons
            name={isShowPassword ? "eye-off" : "eye"}
            size={20}
            color='gray'
            onPress={onToggleShowPassword}
          />
        }
        variant='outline'
        id={label}
      />
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    marginVertical: 10,
  },
});
