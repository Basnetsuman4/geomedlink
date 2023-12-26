import { View } from 'react-native';
import { Provider } from 'react-native-paper';
import ViewDetails from './screens/Details/ViewDetails';


const App = () => {
    return (
        <Provider>
            <View>
                {/* <News /> */}
                {/* <ProfileScreen /> */}
                {/* <Comment /> */}
                {/* <Post /> */}
                {/* <Navigation /> */}
                {/* <Upload /> */}
                {/* <ViewDetails /> */}
                {/* <ChangePsw /> */}
                <ViewDetails />
            </View>
        </Provider>
    )
}
export default App