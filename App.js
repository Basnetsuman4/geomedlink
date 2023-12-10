import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './navigation/Navigation'
import ProfileScreen from './screens/Profile/ProfileScreen'
import { Provider } from 'react-native-paper'
import Post from './screens/Post/Post'
import News from './screens/News/News'
import Upload from './screens/Upload/Upload'
const App = () => {
    return (
        <Provider>
            <View>
                {/* <News /> */}
                {/* <ProfileScreen /> */}
                {/* <Post /> */}
                {/* <Navigation /> */}
                <Upload />
            </View>
        </Provider>
    )
}

export default App