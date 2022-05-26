import React from "react";
import { SafeAreaView } from "react-native";
import { SafeArea as SafeAreaAndroidComponent } from "./safe-area-styles";

const SafeArea: React.FC = ({ children }) => {
  const safeAreas = {
    ios: SafeAreaView,
    android: SafeAreaAndroidComponent,
  };

  return <safeAreas.android>{children}</safeAreas.android>;
};

export default SafeArea;
