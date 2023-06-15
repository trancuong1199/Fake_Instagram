import {React,useContext} from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import styles from './stylesHome';
import { StoreContext } from '../../Components/Store';

const HomeHeader = () => {
  const navigation = useNavigation();
  const {color} = useContext(StoreContext);

  return (
    <View style={styles.header}>
      <Text style={[styles.nameApp, {color: color.white}]}>Instagram</Text>
      <View style={styles.icons}>
        <View>
          <Ionicons
            name="heart-outline"
            size={28}
            marginLeft={5}
            style={[styles.iconHeart, {color: color.white}]}
            onPress={() => navigation.navigate('Notification')}
          />
          <Text style={styles.iconHeartNoti}></Text>
        </View>
        <Ionicons
          name="search-outline"
          size={28}
          marginLeft={5}
          style={{color: color.white}}
          onPress={() => navigation.navigate('Search')}
        />
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={25}
          marginLeft={5}
          style={{color: color.white}}
          onPress={() => navigation.navigate('Message')}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
