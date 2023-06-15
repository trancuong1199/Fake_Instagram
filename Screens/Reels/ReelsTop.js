import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './stylesReels';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../Components/Color/color';

const ReelsTop = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.reelsMainTop}>
      <Ionicons
        name="chevron-back-outline"
        size={28}
        marginRight={5}
        color={COLORS.dark.white}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.reelsMainTopText}>Reels</Text>
      <Feather name="camera" style={{fontSize: 25, color: COLORS.dark.white}} />
    </View>
  );
};

export default ReelsTop;
