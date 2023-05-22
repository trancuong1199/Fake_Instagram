import {React, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import styles from './stylesMessage';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Accounts} from '../../Data/Data';
import {ListNews} from '../../Components/ListNews/ListNews';

const Message = ({navigation}) => {
  const [text, onChangeText] = useState('');

  const ListMessages = props => (
    <View style={styles.messageDetail}>
      <View style={styles.messageDetailLeft}>
        <Image style={styles.messageDetailImage} source={{uri: props.image}} />
        <View>
          <Text style={styles.messageDetailName}>{props.name}</Text>
          <Text style={styles.messageDetailText}>{props.message} - Now</Text>
        </View>
      </View>
      <Ionicons name="camera-outline" size={28} marginRight={5} color="#fff" />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messageHeader}>
        <View style={styles.flexRow}>
          <Ionicons
            name="chevron-back-outline"
            size={28}
            marginRight={5}
            color="#fff"
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.messageHeaderText}>tr.cuong11</Text>
          <Ionicons
            name="chevron-down-outline"
            size={28}
            marginRight={5}
            style={styles.messageHeaderIconDown}
          />
        </View>

        <View style={styles.flexRow}>
          <Ionicons
            name="videocam-outline"
            size={28}
            marginRight={5}
            color="#fff"
            style={styles.messageHeaderIconCam}
          />
          <Ionicons
            name="document-text-outline"
            size={28}
            marginRight={5}
            color="#fff"
          />
        </View>
      </View>
      <View>
        <TextInput
          style={styles.inputSearch}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search..."
          placeholderTextColor='#6B6B6B'
        />
        <Ionicons
          name="search-outline"
          size={28}
          marginRight={5}
          style={styles.inputIconSearch}
        />
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews
          data={Accounts}
          renderItem={({item}) => (
            <ListNews name={item.name} image={item.image} />
          )}
          keyExtractor={item => item.name}
        />
      </View>
      <View style={styles.messageTitle}>
        <Text style={styles.messageTitleNow}>Tin nhắn</Text>
        <Text style={styles.messageTitleWait}>Tin nhắn đang chờ</Text>
      </View>
      <FlatList
        data={Accounts}
        renderItem={({item}) => (
          <ListMessages
            name={item.name}
            image={item.image}
            message={item.message}
          />
        )}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default Message;
