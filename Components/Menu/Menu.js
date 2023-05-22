import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './stylesMenu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

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
        />
      </View>
    </SafeAreaView>
  );
};

export default Menu;
