import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { Home } from "../screens/home";
import { SignIn } from "../screens/SignIn";
// import { AppointmentDetails } from "../screens/appointmentDetails";
// import { AppointmentCreate } from "../screens/appointmentCreate";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{cardStyle: {backgroundColor: 'transparent'}, headerShown: false}}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
        </Navigator>
    );
}