import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/FormInput";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import { View as CustomView } from "@/components/Themed";
import Typography from "@/components/Typography";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const router = useRouter();

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const handleChange = (key: string, val: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const handleSubmit = () => {
    router.push("One");
  };

  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <BackButton />
      <CustomView style={styles.container} lightColor='#fff'>
        <Typography classNames='mt-8' variant='subText'>
          Masuk sebagai karyawan
        </Typography>
        <View className='flex-1 flex-col'>
          <View className='flex-1 flex-col gap-y-5'>
            <View className='w-full flex-col justify-start items-start gap-2 inline-flex'>
              <View className='w-full justify-center'>
                <Input
                  placeholder='Email'
                  containerClassName='w-full'
                  label='Email'
                  type='email'
                  color='sky'
                  onChangeText={(e) => handleChange("email", e)}
                  value={value.email}
                  variant='outline'
                  id='email'
                />
              </View>
            </View>

            <View className='w-full flex-col justify-start items-start gap-2 inline-flex'>
              <View className='w-full justify-center'>
                <Input
                  placeholder='Password'
                  containerClassName='w-full'
                  label='Password'
                  type={showPassword ? "text" : "password"}
                  rightNode={
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={20}
                      color='gray'
                      onPress={handleClickPassword}
                    />
                  }
                  onChangeText={(e) => handleChange("password", e)}
                  value={value.password}
                  variant='outline'
                  id='Password'
                />
              </View>
              <Link
                href={"forgot_password"}
                className='text-blue-500 text-xs font-normal leading-[14.40px] pt-5'
              >
                Lupa password?
              </Link>
            </View>
          </View>
          <Button variant='primary' onPress={handleSubmit} size='base'>
            Masuk
          </Button>
        </View>
      </CustomView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Login;
