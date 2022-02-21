import * as React from "react";

// imports for naviagtion
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// import screens
import Home from "./screens/Home";
import Scanner from "./screens/Scanner";

// variables
const home = "Home";
const scanner = "Scanner";
const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName = {home} screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    
                    // switching between different screens
                    if (rn === home){
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === scanner) {
                        iconName = 'scan-outline';
                    }

                    return <Ionicons name = {iconName} size={size} color={color}/>
                },
            })}>
                <Tab.Screen name={home} component={Home}/>
                <Tab.Screen name={scanner} component={Scanner}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}