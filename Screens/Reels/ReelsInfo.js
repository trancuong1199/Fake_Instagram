import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './stylesReels';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../Components/Color/color';

const ReelsInfo = () => {
  return (
    <View style={styles.reelsMainInfo}>
      <View style={styles.reelsMainInfoLeft}>
        <View style={styles.reelsMainInfoLeftUser}>
          <Image
            style={styles.reelsMainInfoLeftUserImage}
            source={{
              uri: 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg',
            }}
          />
          <Text style={{color: COLORS.dark.white, fontWeight: 'bold'}}>
            the.paradise.club_
          </Text>
        </View>
        <View style={styles.reelsMainInfoLeftMusic}>
          <Ionicons
            name="musical-notes-outline"
            size={15}
            marginRight={8}
            color={COLORS.dark.white}
          />
          <Text style={{color: COLORS.dark.white, fontSize: 11}}>
            Tundra Beal's - Feel Good
          </Text>
        </View>
      </View>
      <View style={styles.reelsMainInfoRight}>
        <Ionicons
          name="heart-outline"
          size={25}
          marginBottom={10}
          color={COLORS.dark.white}
        />
        <Ionicons
          name="chatbubble-outline"
          size={23}
          marginBottom={10}
          color={COLORS.dark.white}
        />
        <Ionicons
          name="paper-plane-outline"
          size={23}
          marginBottom={10}
          color={COLORS.dark.white}
        />
        <Ionicons
          name="ellipsis-horizontal-outline"
          size={23}
          color={COLORS.dark.white}
          marginBottom={10}
        />
        <Image
          style={styles.reelsMainInfoRightImage}
          source={{
            uri: 'https://hanoimoi.com.vn/Uploads/tuandiep/2018/4/8/1(1).jpg',
          }}
        />
      </View>
    </View>
  );
};

export default ReelsInfo;
