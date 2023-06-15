import { React, useContext } from 'react';
import { View, SafeAreaView, FlatList, Image } from 'react-native';

import styles from './stylesBlogs';
import { Accounts } from '../../../Data/Data';
import { StoreContext } from '../../../Components/Store';

const Blogs = () => {
    const { color } = useContext(StoreContext);
    const ListBlogs = (props) => (
        <View style={styles.listBlogs}>
            <Image style={styles.blogImages} source={{ uri: props.blog }} />
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { color: color.black }]}>
            <FlatList
                data={Accounts}
                renderItem={({ item }) => <ListBlogs blog={item.blog} />}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />
        </SafeAreaView>
    );
};

export default Blogs;
