import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
// import { SignIn } from "../screens/signin";
// import { AppointmentDetails } from "../screens/appointmentDetails";
// import { AppointmentCreate } from "../screens/appointmentCreate";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{cardStyle: {backgroundColor: 'transparent'}, headerShown: false}}
        >
            <Screen
                name="Home"
                component={Home}
            />
            {/* <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            /> */}
        </Navigator>
    );
}