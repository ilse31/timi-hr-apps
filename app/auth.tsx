import { ManyUsers, UserIcons } from "@/assets/icons";
import { Text, View as CustomView } from "@/components/Themed";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const auth = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomView lightColor='#fff' style={styles.container}>
        <Text style={styles.textHeader}>Masuk ke timi</Text>
        <Text style={styles.subText}>Saya Ingin Masuk Sebagai</Text>
        <View style={styles.iconContainer}>
          <View style={styles.rectangleView}>
            <UserIcons width={40} height={40} />
            <Text style={styles.pengelola}>HR</Text>
          </View>
          <View style={styles.rectangleView}>
            <ManyUsers width={40} height={40} />
            <Text style={styles.pengelola}>Employee</Text>
          </View>
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
