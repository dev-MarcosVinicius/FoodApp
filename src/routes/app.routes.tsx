import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Product } from "../screens/Product";
import { Bag } from "../screens/Bag";

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
            <Screen
                name="Product"
                component={Product}
            />
            <Screen
                name="Bag"
                component={Bag}
            />
        </Navigator>
    );
}