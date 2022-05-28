import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../view/post/home/home";
import Register from "../view/post/register/register";
import Edit from "../view/post/edit/edit";
import Show from "../view/post/show/show";
import ShowUser from "../view/user/show/show";

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Show" component={Show} />
        <Stack.Screen name="ShowUser" component={ShowUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
