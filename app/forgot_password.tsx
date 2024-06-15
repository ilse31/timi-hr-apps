import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import { View as CustomView } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Typography from "@/components/Typography";
import Input from "@/components/FormInput";

const forgot_password = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons
          name={Platform.OS === "ios" ? "chevron-back" : "arrow-back"}
          size={25}
          color='black'
          style={{ marginLeft: Platform.OS === "ios" ? 5 : 10 }}
        />
      </TouchableOpacity>
      <CustomView>
        <Typography variant='subText'>Forgot Password</Typography>
        <Typography variant='subtitle'>
          Please enter your email address to reset your password
        </Typography>
        <View className='mt-5'>
          <Input
            className='mt-5'
            id='email'
            placeholder='Email'
            label={"Email"}
          />
        </View>
      </CustomView>
    </SafeAreaView>
  );
};

export default forgot_password;

const styles = StyleSheet.create({});
