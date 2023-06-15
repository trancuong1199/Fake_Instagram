import { React, useState, useContext } from 'react';
import { View, Text, SafeAreaView, Image, FlatList, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Accounts } from '../../Data/Data';
import { Comments } from '../../Data/Comments';
import styles from './stylesViewComments';
import { StoreContext } from '../../Components/Store';

const ViewComments = ({ navigation, route }) => {
    const { color } = useContext(StoreContext);
    const [text, setText] = useState('');
    const [listComments, setListComments] = useState(Comments);
    const newComment = {
        name: 'Jenny',
        image: 'https://images.pexels.com/photos/5122188/pexels-photo-5122188.jpeg?auto=compress&cs=tinysrgb&w=600',
        days: 'now',
        content: text,
    };

    const onSendComment = () => {
        setListComments([newComment, ...listComments]);
    };

    const HandleIcons = () => {
        const [changeColorHeart, setChangeColorHeart] = useState(false);
        return (
            <Ionicons
                name={changeColorHeart ? 'heart' : 'heart-outline'}
                color={changeColorHeart ? 'red' : 'gray'}
                size={20}
                marginLeft={5}
                onPress={() => setChangeColorHeart(!changeColorHeart)}
            />
        );
    };

    const ListComments = (props) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <View style={styles.viewCommentUser}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.viewCommentAccountImage}
                            source={{ uri: props.image }}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text
                                style={[styles.viewCommentAccountName, { color: color.white }]}
                            >
                                {props.name}{' '}
                                <Text style={styles.viewCommentAccountDays}>{props.days}</Text>
                            </Text>
                            <Text
                                style={[
                                    styles.viewCommentAccountContent,
                                    { color: color.white },
                                ]}
                            >
                                {props.content}
                            </Text>
                        </View>
                    </View>
                    <HandleIcons />
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: color.black }]}>
            <View style={{ padding: 5, flex: 1 }}>
                <View style={styles.viewCommentHeader}>
                    <Ionicons
                        name="chevron-back-outline"
                        size={30}
                        marginLeft={5}
                        color={color.white}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={[styles.viewCommentHeaderTitle, { color: color.white }]}>
                        Comments
                    </Text>
                    <Ionicons
                        name="ellipsis-horizontal"
                        size={30}
                        marginLeft={5}
                        color={color.white}
                    />
                </View>
                <View>
                    {Accounts.map((value, index) =>
                        value.id === route.params.itemId ? (
                            <View style={styles.viewCommentAccount} key={index}>
                                <Image
                                    style={styles.viewCommentAccountImage}
                                    source={{ uri: value.image }}
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text
                                        style={[
                                            styles.viewCommentAccountName,
                                            { color: color.white },
                                        ]}
                                    >
                                        {value.name}{' '}
                                        <Text style={styles.viewCommentAccountDays}>10 days</Text>
                                    </Text>
                                    <Text
                                        style={[
                                            styles.viewCommentAccountContent,
                                            { color: color.white },
                                        ]}
                                    >
                                        Da Nang 2022
                                    </Text>
                                </View>
                            </View>
                        ) : null,
                    )}
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 15,
                    }}
                >
                    <Text style={{ color: 'gray', fontSize: 15 }}>Comments new first</Text>
                    <Ionicons name="chevron-down-outline" size={20} marginLeft={5} color={'gray'} />
                </View>
                <FlatList
                    data={listComments}
                    renderItem={({ item }) => (
                        <ListComments
                            name={item.name}
                            image={item.image}
                            content={item.content}
                            days={item.days}
                        />
                    )}
                    keyExtractor={(item, index) => index}
                />
            </View>
            <View style={styles.newsMainStatusComment}>
                <View style={styles.newsMainStatusCommentRight}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600',
                        }}
                    />
                    <TextInput
                        style={styles.newsMainStatusCommentInput}
                        onChangeText={setText}
                        value={text}
                        placeholder="Add a comment..."
                        placeholderTextColor="#6B6B6B"
                    />
                </View>
                <View style={styles.newsMainStatusCommentRight}>
                    <Ionicons
                        color={color.white}
                        name="send-outline"
                        size={23}
                        marginRight={10}
                        onPress={() => {
                            onSendComment();
                            setText('');
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ViewComments;
