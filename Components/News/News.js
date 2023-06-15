import { View, Text, Image, SafeAreaView, FlatList, Pressable } from 'react-native';
import styles from './stylesListNews';
import React from 'react';
import { Accounts } from '../../Data/Data';
import { useNavigation } from '@react-navigation/native';

const News = () => {
    const navigation = useNavigation();
    const ListNews = (props) => (
        <View style={styles.accountPost}>
            <Pressable onPress={() => navigation.navigate('Stories')}>
                <Image style={styles.story} source={{ uri: props.image }} />
            </Pressable>
            <Text style={styles.nameAccount}>{props.name}</Text>
        </View>
    );
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    removeClippedSubviews
                    data={Accounts}
                    renderItem={({ item }) => <ListNews name={item.name} image={item.image} />}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </SafeAreaView>
    );
};

export default News;
