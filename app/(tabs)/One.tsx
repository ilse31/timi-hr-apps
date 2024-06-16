import { SafeAreaView, StyleSheet, View } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View as CustomView } from "@/components/Themed";
import { usePathname } from "expo-router";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import BackButton from "@/components/BackButton";
import {
  Avatar,
  AvatarFallbackText,
  Card,
  Heading,
} from "@gluestack-ui/themed";
import Typography from "@/components/Typography";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function TabOneScreen() {
  const isHaveNotification = true;
  return (
    <SafeAreaView
      style={[
        SafeAreaViewAndroid.AndroidSafeArea,
        { backgroundColor: "#3587FE" },
      ]}
    >
      {/* Header  */}
      <CustomView className='bg-[#3587FE] h-1/6'>
        <View className='flex-row justify-between items-center'>
          <View>
            <View className='flex-row'>
              <Avatar bgColor='$amber600' size='md' borderRadius='$md'>
                <AvatarFallbackText>John Doe</AvatarFallbackText>
              </Avatar>

              <View className='ml-5'>
                <Typography variant='subText' color='white'>
                  John Doe
                </Typography>
                <Typography color='white' variant='subtitle'>
                  111202012605 - Frontend Developer
                </Typography>
              </View>
            </View>
          </View>

          <View
            className='relative flex-row items-center justify-center'
            style={{
              alignSelf: "flex-end",
              margin: 10,
              borderRadius: 12,
              backgroundColor: "rgba(248, 248, 248, 0.1)",
            }}
          >
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 10,
                position: "absolute",
                top: -1,
                right: 3,
                zIndex: 1,
                borderWidth: 1,
                borderColor: "white",
                padding: 6,
              }}
            />
            <View>
              <Ionicons name='notifications-outline' color='white' size={25} />
            </View>
          </View>
        </View>
      </CustomView>
      <View
        style={{
          flex: 1,
          backgroundColor: "#e9eeff",
        }}
      ></View>
      <View style={styles.cardsContainer}>
        {/* Centered Card */}
        <View style={styles.centeredCardContainer}>
          <Card size='md' variant='elevated' borderRadius={16} m='$3'>
            <View className='flex-row justify-center'>
              <Typography classNames='text-center mb-1'>
                Jadwal anda hari ini
              </Typography>
            </View>
            <View className=' flex-row justify-center items-center mb-1'>
              <View className='flex-row justify-center items-center'>
                <Ionicons
                  name='briefcase'
                  size={15}
                  className='mr-5'
                  color='#3587FE'
                />
                <Typography
                  variant='subText'
                  classNames='text-center ml-5 mr-5 items-center flex-row'
                >
                  08:00
                </Typography>
                <Entypo
                  name='dots-three-horizontal'
                  size={24}
                  color='#E9EEFF'
                />
                <Typography
                  variant='subText'
                  classNames='text-center ml-5 mr-5 items-center flex-row'
                >
                  17:00
                </Typography>
                <Ionicons
                  name='briefcase-outline'
                  size={15}
                  className='mr-5'
                  color='#3587FE'
                />
              </View>
            </View>

            <View className=' flex-row justify-center items-center '>
              <Typography variant='subtitle' classNames='text-center'>
                <Ionicons name='location-outline' size={12} color='#3587FE' />{" "}
                Jl. Raya Bogor, No. 12, Jakarta
              </Typography>
            </View>
          </Card>
        </View>
      </View>

      <StatusBar translucent backgroundColor='#3587fe' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  cardsContainer: {
    flex: 1,
    backgroundColor: "#e9eeff",
    justifyContent: "center", // Center children vertically
    alignItems: "center", // Center children horizontally
  },
  centeredCardContainer: {
    position: "absolute",
    top: "0%",
    left: "35%",
    width: "100%",
    transform: [{ translateX: -150 }, { translateY: -380 }],
  },
});
