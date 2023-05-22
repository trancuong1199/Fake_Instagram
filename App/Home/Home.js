import {React, useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  RefreshControl,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './stylesHome';
import * as request from '../../utils/request'

import {Accounts} from '../../Data/Data';
import {ListNews} from '../../Components/ListNews/ListNews';
import Menu from '../../Components/Menu/Menu';

function Home({navigation}) {
  // Refresh data When the ScrollView is at scrollY: 0
  const [refreshing, setRefreshing] = useState(false);

  const [text, onChangeText] = useState('');

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // Return name, image, blog for ListBlogs
  const ListBlogs = props => (
    <View style={styles.newsMain}>
      <View style={styles.newsMainTop}>
        <View style={styles.newsMainTopRight}>
          <Image style={styles.avatar} source={{uri: props.image}} />
          <Text style={styles.newsMainName}>{props.name}</Text>
        </View>
        <Text style={styles.more}>...</Text>
      </View>
      <Image style={styles.newsMainPost} source={{uri: props.blog}} />
      <View style={styles.newsMainIcons}>
        <View style={styles.icons}>
          <Ionicons name="heart" size={28} marginRight={5} color="red" />
          <Ionicons
            name="chatbox-ellipses-outline"
            size={26}
            marginRight={5}
            style={styles.iconWhite}
          />
          <Ionicons
            name="paper-plane-outline"
            size={25}
            marginRight={5}
            style={styles.iconWhite}
          />
        </View>
        <Ionicons
          name="bookmark-outline"
          size={25}
          marginRight={5}
          style={styles.iconWhite}
        />
      </View> 
      <View paddingLeft={5} paddingRight={5}>
        <Text style={styles.newsMainTitle}>
          Like by <Text style={styles.likesDetail}>Tran Cuong</Text> and{' '}
          <Text style={styles.likesDetail}>B.A.P company</Text>
        </Text>
        <Text style={styles.newsMainStatusText}>
          Welcome to BAP company{' '}
          <Text style={styles.newsMainStatusTag}>#BAP</Text>
          <Text style={styles.newsMainStatusTag}> #Mobile</Text>
          <Text style={styles.newsMainStatusMore}> ...more</Text>
        </Text>
        <Text style={styles.newsMainStatusMore}>View all comments</Text>
        <View style={styles.newsMainStatusComment}>
          <View style={styles.newsMainStatusCommentRight}>
            <Image style={styles.avatar} source={{uri: props.image}} />
            <TextInput
              style={styles.newsMainStatusCommentInput}
              onChangeText={onChangeText}
              value={text}
              placeholder="Add a comment..."
              placeholderTextColor='#6B6B6B'
            />
          </View>
          <View style={styles.newsMainStatusCommentRight}>
            <Ionicons name="heart" size={20} color="red" />
            <Ionicons
              style={styles.newsMainStatusCommentIconHand}
              name="hand-right"
              size={20}
            />
          </View>
        </View>

      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.header}>
          <Text style={styles.nameApp}>Instagram</Text>
          <View style={styles.icons}>
            <Ionicons
              name="heart-outline"
              size={28}
              marginLeft={5}
              style={styles.iconWhite}
            />
            <Ionicons
              name="search-outline"
              size={28}
              marginLeft={5}
              style={styles.iconWhite}
            />
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={25}
              marginLeft={5}
              style={styles.iconWhite}
              onPress={() => navigation.push('Message')}
            />
          </View>
        </View>
        <View style={styles.newPost}>
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
        <Text style={styles.line}></Text>
      </View>
      <FlatList
        style={styles.flatlist}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={Accounts}
        renderItem={({item}) => (
          <ListBlogs name={item.name} image={item.image} blog={item.blog} />
        )}
        keyExtractor={item => item.name}
      />
      <Menu />
    </SafeAreaView>
  );
}

export default Home;
