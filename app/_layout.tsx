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
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

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

  return (
    <GluestackUIProvider config={config}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {auth ? (
          <Stack
            screenOptions={{
              headerShown: false,
              presentation: "card",
            }}
          >
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen
              name='modal'
              options={{ presentation: "modal", headerShown: false }}
            />
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
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='forgot_password'
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='inputotp'
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='newpassword'
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        )}

        {/* </SafeAreaView> */}
        <StatusBar style='auto' />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
