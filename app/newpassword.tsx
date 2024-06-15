import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import { View as CustomView } from "@/components/Themed";
import Typography from "@/components/Typography";
import Input from "@/components/FormInput";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/components/Button";
import PasswordInput from "@/components/PasswordInput";
import { useRouter } from "expo-router";

const newpassword = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState<{
    [key: string]: { value: string; isShowPassword: boolean; error: string };
  }>({
    password: { value: "", isShowPassword: false, error: "" },
    confirmPassword: { value: "", isShowPassword: false, error: "" },
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

  const handleSubmit = () => {
    const { password, confirmPassword } = newPassword;
    console.log("password", password);
    if (password.value !== confirmPassword.value) {
      alert("Password tidak sama");
      setNewPassword((prevState) => ({
        ...prevState,
        password: {
          ...prevState.password,
          error: "Password tidak sama",
        },
        confirmPassword: {
          ...prevState.confirmPassword,
          error: "Password tidak sama",
        },
      }));
      return;
    }
    console.log("Password berhasil diubah", newPassword);
    alert("Password berhasil diubah");
    router.push("login");
  };

  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <CustomView style={styles.container}>
        <Typography variant='subtitle'>Create New Password</Typography>
        <View className='flex-1'>
          <PasswordInput
            label='Password'
            value={newPassword.password.value}
            errorMessage={newPassword.password.error}
            isShowPassword={newPassword.password.isShowPassword}
            onChangeText={(value) => handlePasswordChange("password", value)}
            onToggleShowPassword={() => toggleShowPassword("password")}
          />
          <PasswordInput
            errorMessage={newPassword.confirmPassword.error}
            label='Confirm Password'
            value={newPassword.confirmPassword.value}
            isShowPassword={newPassword.confirmPassword.isShowPassword}
            onChangeText={(value) =>
              handlePasswordChange("confirmPassword", value)
            }
            onToggleShowPassword={() => toggleShowPassword("confirmPassword")}
          />
        </View>
        <Button onPress={handleSubmit} variant='primary' size='base'>
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
