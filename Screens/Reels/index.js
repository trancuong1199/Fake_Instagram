import React from 'react';
import {View, SafeAreaView, } from 'react-native';

import styles from './stylesReels';
import ReelsTop from './ReelsTop';
import ReelsInfo from './ReelsInfo';
import ReelsContent from './ReelsContent';

const Reels = () => {
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.reelsMain}>
        <ReelsTop />
        <ReelsInfo />
        <ReelsContent />
      </View>
    </SafeAreaView>
  );
};

export default Reels;

// lazy load react native
