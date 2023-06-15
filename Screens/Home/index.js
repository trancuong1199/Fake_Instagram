import {React, useState, useEffect, useContext} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';

import styles from './stylesHome';
import News from '../../Components/News/News';
import HomeContent from './HomeContent';
import HomeHeader from './HomeHeader';
import { StoreContext } from '../../Components/Store';

function Home({route}) {
  const [post, setPost] = useState(null)
  const {color} = useContext(StoreContext);
  useEffect(() => {
    if(route.params != undefined) {
      const data = {
        image: route.params.image,
        content: route.params.content
      }
      setPost(data) 
    }
  }, [route.params?.image])

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: color.black}]}>
      <StatusBar barStyle={color.barStyle} backgroundColor={color.black} />
      <View style={styles.layout}>
        <HomeHeader />
        <View style={styles.newPost}>
          <News />
        </View>
        <Text style={styles.line}></Text>
      </View>
      <HomeContent props={post}/>
    </SafeAreaView>
  );
}

export default Home;
