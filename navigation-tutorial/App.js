import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from "./screens/Home";
import Feed from "./screens/Feed";
import Setting from "./screens/Setting";
import Payment from "./screens/Payment";
import Page1 from "./screens/TopBar/Page1";
import Page2 from "./screens/TopBar/Page2";
import Page3 from "./screens/TopBar/Page3";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Top = createMaterialTopTabNavigator();


function TopGroup() {
  return (
    <Top.Navigator>
      <Top.Screen name="Home" component={Home} />
      <Top.Screen name="Page1" component={Page1} />
      <Top.Screen name="Page2" component={Page2} />
      <Top.Screen name="Page3" component={Page3} />
    </Top.Navigator>
  )
}


function DrawerGroup() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TabGroup" component={TabGroup} options={{ headerShown: false }} />
      <Drawer.Screen name="Payment" component={Payment} />
    </Drawer.Navigator>
  )
}


function TabGroup() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        let IconName;

        if (route.name == "StackGroup") {
          IconName = focused ? "home" : "home-outline";
        } else if (route.name == "Feed") {
          IconName = focused ? "book" : "book-outline"
        } else if (route.name == "Setting") {
          IconName = focused ? "settings" : "settings-outline"
        }
        return <Ionicons name={IconName} size={size} color={color} />;
      },
      tabBarInactiveTintColor: 'grey'
    })}>
      <Tab.Screen name="StackGroup" component={StackGroup} options={{ title: "Home" }} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  )
}

function StackGroup() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="TopGroup" component={TopGroup} />
    </Stack.Navigator>
  )
}




export default function App() {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  )
}