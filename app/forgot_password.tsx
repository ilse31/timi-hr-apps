import {
  Dimensions,
  Modal,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import { View as CustomView } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Typography from "@/components/Typography";
import Input from "@/components/FormInput";
import Button from "@/components/Button";
import { Plane } from "@/assets/icons";
import Modals from "@/components/Modal";
import BackButton from "@/components/BackButton";

const ForgotPassword = () => {
  const router = useRouter();
  const [overLay, setOverLay] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleChangeNextPage = () => {
    setOverLay(false);
    router.push("inputotp");
  };

  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        handleChangeNextPage();
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setIsMounted(true);
    }
  }, [overLay]);

  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <BackButton />
      <CustomView className='flex-1'>
        <Typography classNames='mt-5' variant='subtitle'>
          Masukan Email kamu yang terdaftar
        </Typography>
        <View className='w-full flex-1 mt-5'>
          <Input
            className='mt-5'
            id='email'
            placeholder='Email'
            label={"Email"}
          />
        </View>
        <Button
          variant='primary'
          size='base'
          onPress={() => setOverLay(!overLay)}
        >
          Reset Password
        </Button>
        <Modals overLay={overLay} setOverLay={setOverLay}>
          <View className='bg-white gap-y-5 flex-1 items-center justify-center rounded-3xl h-full'>
            <Ionicons name='paper-plane' size={100} color='#3587FE' />
            <View>
              <Typography>Kode OTP sudah terkirim</Typography>
              <Typography>Silahkan Cek Email Kamu</Typography>
            </View>
          </View>
        </Modals>
      </CustomView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
