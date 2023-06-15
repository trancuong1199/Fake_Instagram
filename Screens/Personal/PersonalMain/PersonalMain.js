import { React, useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Blogs from '../Blogs/Blogs';
import YourImages from '../YourImages/YourImages';
import YourVideosShare from '../YourVideosShare/YourVideosShare';
import { StoreContext } from '../../../Components/Store';

const Tab = createMaterialTopTabNavigator();

const PersonalMain = () => {
    const { color } = useContext(StoreContext);
    return (
        <Tab.Navigator
            initialRouteName="Blogs"
            screenOptions={{
                tabBarActiveTintColor: color.white,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: color.white,
                },
            }}
        >
            <Tab.Screen
                name="Blogs"
                component={Blogs}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focus }) => <Ionicons name="apps-outline" size={26} color={color.white} />,
                }}
            />
            <Tab.Screen
                name="YourImages"
                component={YourImages}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focus }) => <Ionicons name="videocam-outline" size={25} color={color.white} />,
                }}
            />
            <Tab.Screen
                name="YourVideosShare"
                component={YourVideosShare}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focus }) => <Ionicons name="person-outline" size={26} color={color.white} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default PersonalMain;
