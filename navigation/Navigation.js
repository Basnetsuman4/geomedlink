import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/Profile/ProfileScreen'

const Navigation = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Profile' options={{ title: 'Profile' }} component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation