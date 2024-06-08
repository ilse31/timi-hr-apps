import { View as CustomView } from "@/components/Themed";
import Typography from "@/components/Typography";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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

  const handleChange = (key: string, val: string) =>
    setValue((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity className='' onPress={() => router.back()}>
        <Ionicons
          name={Platform.OS === "ios" ? "chevron-back" : "arrow-back"}
          size={25}
          color='black'
          style={{ marginLeft: 5 }}
        />
      </TouchableOpacity>
      <CustomView style={styles.container} className='' lightColor='#fff'>
        <Typography className='mt-5ß' variant='subText'>
          Masuk sebagai karyawan
        </Typography>
        <View className='flex-1 flex-col'>
          <View className='flex-1 flex-col gap-y-5'>
            <View className='w-full flex-col justify-start items-start gap-2 inline-flex'>
              <Text className="text-neutral-700 text-xs font-semibold font-['Poppins'] leading-[14.40px]">
                Email
              </Text>
              <View
                id='email'
                className='w-full px-2 pb-3  rounded-lg border border-neutral-200 justify-start items-center gap-2.5 inline-flex'
              >
                <TextInput
                  id='email'
                  inputMode='text'
                  value={value.email}
                  onChangeText={(e) => handleChange("email", e)}
                  placeholder='Email'
                  className='text-left w-full text-neutral-700 text-sm font-normal  bg-transparent outline-none'
                />
              </View>
            </View>

            <View className='w-full flex-col justify-start items-start gap-2 inline-flex'>
              <Text className="text-neutral-700 text-xs font-semibold font-['Poppins'] leading-[14.40px]">
                Password
              </Text>
              <View
                id='Password'
                className='w-full flex-row px-2 pb-3 rounded-lg border border-neutral-200 items-center gap-2.5'
              >
                <TextInput
                  secureTextEntry={!showPassword}
                  inputMode='text'
                  id='Password'
                  value={value.password}
                  onChangeText={(e) => handleChange("password", e)}
                  placeholder='Password'
                  className='flex-1 text-neutral-700 text-sm font-normal bg-transparent outline-none'
                />
                <Ionicons
                  onPress={handleClickPassword}
                  name={showPassword ? "eye-off" : "eye"}
                  size={20}
                  color='black'
                />
              </View>
              <Text className="text-blue-500 text-xs font-normal font-['Poppins'] leading-[14.40px] pt-5">
                Lupa password?
              </Text>
            </View>
          </View>
          <TouchableOpacity
            className='w-full bg-blue-600 rounded-lg py-3 items-center justify-center'
            onPress={() => handleSubmit()}
          >
            <Text className='text-white text-sm font-semibold'>Masuk</Text>
          </TouchableOpacity>
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

type FormFieldProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  secureTextEntry?: boolean;
  id: string;
};

const FormField = ({
  label,
  value,
  setValue,
  secureTextEntry,
  id,
}: FormFieldProps) => (
  <View className='flex-1'>
    <Text className='text-neutral-700'>{label}</Text>
    <View className='flex-1'>
      <TextInput
        id={id}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={setValue}
        placeholder={label}
        className='flex-1 text-neutral-700 text-sm font-normal bg-transparent outline-none'
      />
    </View>
  </View>
);
