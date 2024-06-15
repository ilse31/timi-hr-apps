import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import { View as CustomView } from "@/components/Themed";
import Typography from "@/components/Typography";
import Input from "@/components/FormInput";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/components/Button";
import PasswordInput from "@/components/PasswordInput";

const newpassword = () => {
  const [newPassword, setNewPassword] = useState<{
    [key: string]: { value: string; isShowPassword: boolean };
  }>({
    password: { value: "", isShowPassword: false },
    confirmPassword: { value: "", isShowPassword: false },
  });

  const handlePasswordChange = (field: string, value: any) => {
    setNewPassword((prevState) => ({
      ...prevState,
      [field]: { ...prevState[field], value },
    }));
  };

  const toggleShowPassword = (field: string) => {
    setNewPassword((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isShowPassword: !prevState[field].isShowPassword,
      },
    }));
  };

  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <CustomView style={styles.container}>
        <Typography variant='subtitle'>Create New Password</Typography>
        <View className='flex-1'>
          <PasswordInput
            label='Password'
            value={newPassword.password.value}
            isShowPassword={newPassword.password.isShowPassword}
            onChangeText={(value) => handlePasswordChange("password", value)}
            onToggleShowPassword={() => toggleShowPassword("password")}
          />
          <PasswordInput
            label='Confirm Password'
            value={newPassword.confirmPassword.value}
            isShowPassword={newPassword.confirmPassword.isShowPassword}
            onChangeText={(value) =>
              handlePasswordChange("confirmPassword", value)
            }
            onToggleShowPassword={() => toggleShowPassword("confirmPassword")}
          />
        </View>
        <Button variant='primary' size='base'>
          Submit
        </Button>
      </CustomView>
    </SafeAreaView>
  );
};

export default newpassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },

  inputContainer: {
    width: "100%",
    justifyContent: "center",
    marginVertical: 10,
  },
});
