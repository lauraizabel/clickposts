import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import Theme from "./src/theme";
import Home from "./src/view/home/home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaView>
        <Home />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
