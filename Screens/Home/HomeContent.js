import { React, useState, useCallback, useEffect, useContext } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TextInput,
    Pressable,
    RefreshControl,
    ActivityIndicator,
    TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Accounts } from '../../Data/Data';
import { useNavigation } from '@react-navigation/native';

import { StoreContext } from '../../Components/Store';
import { t } from '../../Components/Store';
import styles from './stylesHome';

const HomeContent = (props) => {
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [listData, setListData] = useState(Accounts);
    const [text, onChangeText] = useState('');
    const navigation = useNavigation();
    const { color } = useContext(StoreContext);

    const newData = [
        {
            id: 15,
            name: 'Cat',
            image: 'https://static.wixstatic.com/media/9d8ed5_b8fcc13f08fc4374bb1f979e032b0eb7~mv2.jpg/v1/fit/w_600,h_567,al_c,q_20,enc_auto/file.jpg',
            blog: 'https://www.elle.vn/wp-content/uploads/2017/04/19/anh-nude-nghe-thuat-elle-viet-nam-26.jpg',
        },
    ];
    const loadMoreData = [
        {
            id: 17,
            name: 'Water',
            image: 'https://st.quantrimang.com/photos/image/2021/09/05/Co-Vietnam.png',
            blog: 'https://dulichviet.com.vn/images/bandidau/danh-sach-nhung-buc-anh-viet-nam-lot-top-anh-dep-the-gioi.jpg',
        },
    ];
    const uploadPost = [
        {
            id: 20,
            name: 'New men',
            image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=600',
            blog: props.props?.image,
            content: props.content,
        },
    ];

    useEffect(() => {
        if (props.props != null) {
            setListData([...uploadPost, ...Accounts]);
        }
    }, [props]);

    const HandleIcons = (props) => {
        const [changeColorHeart, setChangeColorHeart] = useState(false);
        const [changeIconBookMark, setChangeIconBookMark] = useState(false);

        return (
            <View style={styles.newsMainIcons}>
                <View style={styles.icons}>
                    <Ionicons
                        name={changeColorHeart ? 'heart' : 'heart-outline'}
                        size={28}
                        marginRight={5}
                        color={changeColorHeart ? 'red' : color.white}
                        onPress={() => setChangeColorHeart(!changeColorHeart)}
                    />
                    <Ionicons
                        name="chatbox-ellipses-outline"
                        size={26}
                        marginRight={5}
                        style={{ color: color.white }}
                        onPress={() => navigation.navigate('ViewComments', { itemId: props.itemId })}
                    />
                    <Ionicons name="paper-plane-outline" size={25} marginRight={5} style={{ color: color.white }} />
                </View>
                <Ionicons
                    name={changeIconBookMark ? 'bookmark' : 'bookmark-outline'}
                    color={changeIconBookMark ? 'yellow' : color.white}
                    size={25}
                    marginRight={5}
                    onPress={() => setChangeIconBookMark(!changeIconBookMark)}
                />
            </View>
        );
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        if (listData.length < 15) {
            setListData([...newData, ...Accounts]);
            setRefreshing(false);
        } else {
            setRefreshing(false);
        }
    }, [refreshing]);

    const ListBlogs = (props) => (
        <View style={styles.newsMain}>
            <View style={styles.newsMainTop}>
                <Pressable onPress={() => navigation.navigate('Personal', { itemId: props.id })}>
                    <View style={styles.newsMainTopRight}>
                        <Image style={styles.avatar} source={{ uri: props.image }} />
                        <Text style={[styles.newsMainName, { color: color.white }]}>{props.name}</Text>
                    </View>
                </Pressable>
                <Text style={[styles.more, { color: color.white }]}>...</Text>
            </View>
            <TouchableWithoutFeedback>
                <Image style={styles.newsMainPost} source={{ uri: props.blog }} />
            </TouchableWithoutFeedback>
            <HandleIcons itemId={props.id} />
            <View paddingLeft={5} paddingRight={5}>
                <Text style={[styles.newsMainTitle, { color: color.white }]}>
                    {t('likeBy')} <Text style={styles.likesDetail}>Tran Cuong</Text> {t('and')}{' '}
                    <Text style={styles.likesDetail}>B.A.P company</Text>
                </Text>
                <Text style={[styles.newsMainStatusText, { color: color.white }]}>
                    Welcome to BAP company <Text style={styles.newsMainStatusTag}>#BAP</Text>
                    <Text style={styles.newsMainStatusTag}> #Mobile</Text>
                    <Text style={styles.newsMainStatusMore}> {t('more')}</Text>
                </Text>
                <Text
                    style={styles.newsMainStatusMore}
                    onPress={() => navigation.navigate('ViewComments', { itemId: props.id })}
                >
                    {t('viewAllComments')}
                </Text>
                <View style={styles.newsMainStatusComment}>
                    <View style={styles.newsMainStatusCommentRight}>
                        <Image style={styles.avatar} source={{ uri: props.image }} />
                        <TextInput
                            style={[styles.newsMainStatusCommentInput, { borderColor: color.black }]}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder={t('addComment')}
                            placeholderTextColor="#6B6B6B"
                        />
                    </View>
                    <View style={styles.newsMainStatusCommentRight}>
                        <Ionicons name="heart" size={20} color="red" />
                        <Ionicons style={styles.newsMainStatusCommentIconHand} name="hand-right" size={20} />
                    </View>
                </View>
            </View>
        </View>
    );
    return (
        <FlatList
            style={styles.flatlist}
            data={listData}
            renderItem={({ item }) => <ListBlogs name={item.name} image={item.image} blog={item.blog} id={item.id} />}
            keyExtractor={(item, index) => index}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            ListFooterComponent={() =>
                isLoading ? (
                    <View
                        style={{
                            marginTop: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            padding: 10,
                            flexDirection: 'column',
                        }}
                    >
                        <Text> Load More </Text>
                        <ActivityIndicator size="large" color={color.white} />
                    </View>
                ) : null
            }
            onEndReached={() => {
                setIsLoading(true);
                setTimeout(() => {
                    setListData([...listData, ...loadMoreData]);
                    setIsLoading(false);
                }, 2000);
            }}
        />
    );
};

export default HomeContent;
