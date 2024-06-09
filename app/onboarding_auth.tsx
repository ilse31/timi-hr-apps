import { ManyUsers, UserIcons } from "@/assets/icons";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import { Text, View as CustomView } from "@/components/Themed";
import Typography from "@/components/Typography";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

const auth = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <CustomView lightColor='#fff' style={styles.container}>
        {/* <Text style={styles.textHeader}>Masuk ke timi</Text> */}
        <Typography variant='titleHeader'>Masuk ke timi</Typography>
        <Text style={styles.subText}>Saya Ingin Masuk Sebagai</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.rectangleView}
            onPress={() => handleClick("/login")}
          >
            <UserIcons width={40} height={40} />
            <Text style={styles.pengelola}>HR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rectangleView}
            onPress={() => handleClick("/login")}
          >
            <ManyUsers width={40} height={40} />
            <Text style={styles.pengelola}>Employee</Text>
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
  textHeader: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
  subText: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "400",
    fontFamily: "Poppins_400Regular",
  },
  rectangleView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#f8f8f8",
    borderStyle: "solid",
    borderColor: "#dedede",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 128,
  },
  pengelola: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
    color: "#404040",
    textAlign: "left",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 16,
  },
});

export default auth;
