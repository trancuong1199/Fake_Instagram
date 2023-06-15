import { React, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StoreContext } from './Components/Store';
import Message from './Screens/Message';
import SignIn from './Screens/SignIn';
import Notification from './Screens/Notification';
import UploadPost from './Screens/UploadPost';
import ButtomTab from './Components/ButtomTab';
import ViewComments from './Screens/ViewComments';
import SignUp from './Screens/SignUp';
import ConfirmPassword from './Screens/ConfirmPassword';
import Stories from './Components/Stories';
import MessageDetail from './Screens/MessageDetail';

const App = () => {
    const Stack = createNativeStackNavigator();
    const state = useContext(StoreContext);
    const isLoggedIn = state.isLoggedIn;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLoggedIn ? (
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="ButtomTab" component={ButtomTab} />
                        <Stack.Screen name="Message" component={Message} />
                        <Stack.Screen name="UploadPost" component={UploadPost} />
                        <Stack.Screen name="Notification" component={Notification} />
                        <Stack.Screen name="ViewComments" component={ViewComments} />
                        <Stack.Screen name="Stories" component={Stories} />
                        <Stack.Screen name="MessageDetail" component={MessageDetail} />
                    </Stack.Group>
                ) : (
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="SignIn" component={SignIn} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                        <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
                    </Stack.Group>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
