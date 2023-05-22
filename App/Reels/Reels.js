import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {VideoData} from '../../Data/VideoData';
import styles from './stylesReels';
import Menu from '../../Components/Menu/Menu';

const Reels = () => {
  const navigation = useNavigation();
  const setWidth = Dimensions.get('window').width;
  const setHeight = Dimensions.get('window').height;

  const ListReels = props => (
    <View style={{position: 'relative', width: setWidth, height: setHeight}}>
      <Video
        source={props.video}
        ref={ref => {
          this.player = ref;
        }}
        onBuffer={this.onBuffer}
        onError={this.videoError}
        style={{position: 'absolute', width: '100%', height: '100%'}}
        resizeMode="cover"
        repeat={true}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.reelsMain}>
        <View style={styles.reelsMainTop}>
          <Ionicons
            name="chevron-back-outline"
            size={28}
            marginRight={5}
            color="#fff"
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.reelsMainTopText}>Reels</Text>
          <Feather name="camera" style={{fontSize: 25, color: 'white'}} />
        </View>
        <View style={styles.reelsMainInfo}>
          <View style={styles.reelsMainInfoLeft}>
            <View style={styles.reelsMainInfoLeftUser}>
              <Image
                style={styles.reelsMainInfoLeftUserImage}
                source={{
                  uri: 'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg',
                }}
              />
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                the.paradise.club_
              </Text>
            </View>
            <View style={styles.reelsMainInfoLeftMusic}>
              <Ionicons
                name="musical-notes-outline"
                size={15}
                marginRight={8}
                color="#fff"
              />
              <Text style={{color: '#fff', fontSize: 11}}>
                Tundra Beal's - Feel Good
              </Text>
            </View>
          </View>
          <View style={styles.reelsMainInfoRight}>
            <Ionicons name="heart-outline" size={25} marginBottom={10} color="#fff" />
            <Ionicons name="chatbubble-outline" size={23} marginBottom={10} color="#fff" />
            <Ionicons name="paper-plane-outline" size={23} marginBottom={10} color="#fff" />
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={23}
              color="#fff"
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
        <FlatList
          data={VideoData}
          snapToInterval={setHeight}
          renderItem={({item}) => (
            <ListReels video={item.video} title={item.title} />
          )}
          keyExtractor={item => item.video}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.reelsMainMenu}>
          <Menu />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Reels;

// lazy load react native
