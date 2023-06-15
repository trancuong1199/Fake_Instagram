import { React, useContext } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';

import Home from '../../Screens/Home';
import Search from '../../Screens/Search';
import Reels from '../../Screens/Reels';
import Personal from '../../Screens/Personal';
import ChoosePosts from '../../Screens/ChoosePosts';
import { StoreContext } from '../../Components/Store';

const ButtomTab = () => {
    const theme = useTheme();
    const { color } = useContext(StoreContext);
    const Tab = createMaterialBottomTabNavigator();
    theme.colors.secondaryContainer = 'transparent';

    const tabOption = (iconActive, iconInActive) => {
        return {
            tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? iconActive : iconInActive} size={28} color={color.white} />
            ),
        };
    };

    return (
        <Tab.Navigator labeled={false} initialRouteName="Home" barStyle={{ backgroundColor: color.black }}>
            <Tab.Screen name="Home" component={Home} options={tabOption('home', 'home-outline')} />
            <Tab.Screen name="Search" component={Search} options={tabOption('search', 'search-outline')} />
            <Tab.Screen
                name="ChoosePosts"
                component={ChoosePosts}
                options={tabOption('add-circle', 'add-circle-outline')}
            />
            <Tab.Screen name="Reels" component={Reels} options={tabOption('videocam', 'videocam-outline')} />
            <Tab.Screen
                name="Personal"
                component={Personal}
                options={tabOption('person-circle', 'person-circle-outline')}
                initialParams={{ itemId: 9 }}
            />
        </Tab.Navigator>
    );
};

export default ButtomTab;
