import {React, useContext} from 'react';
import {View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './stylesNoti';
import Menu from '../../Components/Menu/Menu';
import { StoreContext } from '../../Components/Store';

const Notification = ({navigation}) => {
  const {color} = useContext(StoreContext);
  const NotiTitle = props => {
    return <Text style={[styles.notiContentTitle, {color: color.white}]}>{props.title}</Text>;
  };

  const NotiContent = props => {
    return (
      <View style={styles.notiContent}>
        <View style={styles.notiContentMain}>
          <View style={styles.notiContentMainLeft}>
            <Image
              style={styles.notiContentMainLeftImage}
              source={{uri: props.image}}
            />
            <Text style={[styles.notiContentMainLeftText, {color: color.white}]}>
              <Text style={{fontWeight: 700}}>{props.userName}</Text>
              {props.content}
              <Text style={styles.notiContentMainLeftTextDays}>
                {props.days}
              </Text>
            </Text>
          </View>
        </View>
        {props.follow ? (
          <View style={styles.notiContentFollow}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 600}}>Follow</Text>
          </View>
        ) : (
          null
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: color.black}]}>
      <View style={{flex: 1}}>
        <Pressable
          style={styles.notiHeader}
          onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-outline"
            size={28}
            marginLeft={5}
            color={color.white}
          />
          <Text style={[styles.notiHeaderText, {color: color.white}]}>Notification</Text>
        </Pressable>
        <View></View>
        <NotiTitle title="Today" />
        <NotiContent
          image="https://images.pexels.com/photos/16881620/pexels-photo-16881620/free-photo-of-nunca-tan-lejos-de-la-realidad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          userName="Hau nguyen"
          content=" liked your post. "
          days="today"
        />
        <NotiTitle title="This month" />
        <NotiContent
          image="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"
          userName="kvii.20"
          content=" liked your post. "
          days="10 days"
        />
        <NotiContent
          image="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=600"
          content="A friend of your is Mai Nhan to using Instagram with name's __Mai.nhan "
          days="15 days ago"
          follow={true}
        />
      </View>
      <Menu style={styles.notiMenu}/>
    </SafeAreaView>
  );
};

export default Notification;
