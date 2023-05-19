import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './stylesHome';

import {Accounts} from '../Data/Data';
import {ListNews} from '../../Components/ListNews/ListNews';

function Home({navigation}) {
  // Refresh data When the ScrollView is at scrollY: 0
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
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
            name="search-outline"
            size={28}
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
      <Text style={styles.newsMainTitle}>
        Like by <Text style={styles.likesDetail}>Tran Cuong</Text> and{' '}
        <Text style={styles.likesDetail}>B.A.P company</Text>
      </Text>
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
              onPress={() => navigation.navigate('Message')}
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
      <View style={styles.mainBottom}>
        <Ionicons
          name="home-outline"
          size={30}
          marginLeft={5}
          style={styles.iconWhite}
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
}

export default Home;
