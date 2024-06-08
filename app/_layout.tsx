import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

import { useColorScheme } from "@/components/useColorScheme";
import { Platform, SafeAreaView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setItem } from "@/helpers/storage";
import { Ionicons } from "@expo/vector-icons";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "onboarding_auth",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [auth, setAuth] = useState<boolean>(false);

  const getStorage = async () => {
    const auth = await AsyncStorage.getItem("auth");
    if (auth) {
      setAuth(auth === "true");
    }
  };

  const setStorage = async (auth: boolean) => {
    await setItem("auth", auth.toString());
    setAuth(auth);
  };

  const handleClick = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    setStorage(false);
    getStorage();

    console.log("RootLayoutNav", auth);
  }, [auth]);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {auth ? (
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='modal' options={{ presentation: "modal" }} />
        </Stack>
      ) : (
        <Stack>
          <Stack.Screen
            name='onboarding_auth'
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='login'
            options={{
              // headerTitle: "",
              // headerTransparent: true,
              headerShown: false,
              // headerLeft: () => (
              //   <TouchableOpacity style={{}} onPress={() => router.back()}>
              //     {Platform.OS === "ios" ? (
              //       <Ionicons
              //         name='chevron-back'
              //         size={30}
              //         color='black'
              //         style={{ marginRight: 5 }}
              //       />
              //     ) : (
              //       <Ionicons name='arrow-back' size={30} color='black' />
              //     )}
              //   </TouchableOpacity>
              // ),
            }}
          />
        </Stack>
      )}

      {/* </SafeAreaView> */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemeProvider>
  );
}
