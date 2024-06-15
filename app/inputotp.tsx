import { SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import { View as CustomView } from "@/components/Themed";
import BackButton from "@/components/BackButton";
import Typography from "@/components/Typography";
import OTPTextView from "react-native-otp-textinput";
import { useRouter } from "expo-router";

const inputotp = () => {
  const router = useRouter();
  const [otpInput, setOtpInput] = useState("");

  useEffect(() => {
    if (otpInput.length === 4) {
      router.push("newpassword");
    }
  }, [otpInput]);

  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <BackButton />
      <CustomView className='mt-5'>
        <Typography variant='subText'>Input OTP</Typography>
        <Typography variant='subtitle'>
          Masukan OTP yang telah dikirim ke email kamu
        </Typography>
        <OTPTextView
          tintColor={"#3587FE"}
          autoFocus={true}
          containerStyle={{ marginTop: 20 }}
          textInputStyle={{ borderRadius: 10, borderWidth: 4 }}
          handleTextChange={(text) => setOtpInput(text)}
          inputCount={4}
          keyboardType='numeric'
        />
      </CustomView>
    </SafeAreaView>
  );
};

export default inputotp;

const styles = StyleSheet.create({});
