import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './navigation/Navigation'
import ProfileScreen from './screens/Profile/ProfileScreen'
import { Provider } from 'react-native-paper'
import Post from './screens/Post/Post'
const App = () => {
    return (
        <Provider>
        <View>
            {/* <ProfileScreen /> */}
            <Post />
            {/* <Navigation /> */}
        </View>
        </Provider>
    )
}

export default App