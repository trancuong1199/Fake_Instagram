import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import styles from './stylesMenu';

const Menu = () => {
  const navigation = useNavigation();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <SafeAreaView>
      <View style={styles.mainBottom}>
        <Ionicons
          name="home-outline"
          size={30}
          marginLeft={5}
          style={styles.iconWhite}
          onPress={() => navigation.navigate('Home')}
        />
        <Ionicons
          name="search-outline"
          size={30}
          marginLeft={5}
          style={styles.iconWhite}
          onPress={() => navigation.navigate('Search')}
        />
        <Ionicons
          name="add-circle-outline"
          size={30}
          marginLeft={5}
          style={styles.iconWhite}
        />
        <Ionicons
          name="videocam-outline"
          size={30}
          marginLeft={5}
          style={styles.iconWhite}
          onPress={() => navigation.navigate('Reels')}
        />
        <Ionicons
          name="person-circle-outline"
          size={30}
          marginLeft={5}
          style={styles.iconWhite}
          onPress={() => navigation.navigate('Personal', {itemId: 9})}
        />
      </View>
    </SafeAreaView>

    // <Tab.Navigator backBehavior='history' initialRouteName='Home'>
    //   <Tab.Screen name="Home" component={Home} />
    //   <Tab.Screen name="Personal" component={Personal} />
    // </Tab.Navigator>
  );
};

export default Menu;
