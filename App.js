import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import LoginScreen from "./components/LoginScreen";
import MainScreen from "./components/MainScreen";
import BiletScreen from "./components/BiletScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerStyle: {
            height: 100,
            backgroundColor: "#5F9B48",
          },
          initialRouteName: "Autentificare",
          headerTintColor: "white",
          headerLeft: ({}) => <CustomHeaderLeft />,
        })}
      >
        <Stack.Screen name="Autentificare" component={LoginScreen} />
        <Stack.Screen name="Acasă" component={MainScreen} />
        <Stack.Screen name="Titluri tarifare active" component={BiletScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CustomHeaderLeft = () => {
  const navigator = useNavigation();

  const handleLoginMenuPress = () => {
    navigator.navigate("Autentificare");
  };

  return (
    <TouchableOpacity style={{ marginLeft: 15 }} onPress={handleLoginMenuPress}>
      <Feather name="menu" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default App;
