import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler"
import Home from "./screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Rms from "./screens/Tab/Rms";
import Happening from "./screens/Tab/Happening";
import Main from "./screens/Tab/Main";


const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

function TabGroup() {
  return (
    <Tab.Navigator screenOptions={({
      headerShown: false,
    })}>
      <Tab.Screen name="Home" component={Main}></Tab.Screen>
      <Tab.Screen name="RMS" component={Rms}></Tab.Screen>
      <Tab.Screen name="Happenings" component={Happening}></Tab.Screen>
    </Tab.Navigator>
  )
}

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={({
      headerTitleAlign: 'center'
    })}>
      <Drawer.Screen name="home">{TabGroup}</Drawer.Screen>
      <Drawer.Screen name="Dashboard" component={Home}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
}