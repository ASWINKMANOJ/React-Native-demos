import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./Screens/Home";
import Settings from "./Screens/Settings";
import Passwords from "./Screens/Passwords";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { useWindowDimensions } from "react-native";
import { PaperProvider } from "react-native-paper";


const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let Icon;
          if (route.name == "Settings") {
            Icon = focused ? "ios-settings" : "ios-settings-outline"
          } else if (route.name == "Home") {
            Icon = focused ? "ios-home" : "ios-home-outline"
          } else if (route.name == "Passwords") {
            Icon = focused ? "key" : "key-outline"
          }

          return <Ionicons name={Icon} size={size} color={color} />
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      })}

    >
      <Tab.Group>
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Passwords" component={Passwords} />
      </Tab.Group>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabGroup />
      </NavigationContainer>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 70,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    paddingBottom: 5,
    borderRadius: 25,
    bottom: 40,
    left: 0,
    right: 0,
    elevation: 8,
  }
})