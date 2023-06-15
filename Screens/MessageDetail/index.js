import { React, useContext, useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore';
import { GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';

import { StoreContext } from '../../Components/Store';
import styles from './stylesMessDetail';
import { db, FIREBASE_AUTH } from '../../Service/Firebase';

const MessageDetail = ({ navigation, route }) => {
    const { color } = useContext(StoreContext);
    const [textInput, setTextInput] = useState('');
    const [chats, setChats] = useState([]);
    const collectionRef = collection(db, 'chats');
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     onSnapshot(collection(db, 'chats'), (snapshot) => {
    //         setChats(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     });
    // }, []);

    // const saveMessages = async () => {
    //     await addDoc(collectionRef, { content: textInput });
    //     setTextInput('');
    // };

    // const ListMessage = (props) => {
    //     return (
    //         <View style={{ alignItems: 'flex-end', marginBottom: 15 }}>
    //             <Text style={{ color: '#fff', backgroundColor: '#3880ff', padding: 10, borderRadius: 18 }}>
    //                 {props.content}
    //             </Text>
    //         </View>
    //     );
    // };
    useLayoutEffect(() => {
        const collectionRef = collection(db, 'chats');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setMessages(
                querySnapshot.docs.map((doc) => ({
                    _id: doc.data()._id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user,
                })),
            );
        });
        return unsubscribe;
    }, []);
    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
        // setMessages([...messages, ...messages]);
        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(db, 'chats'), {
            _id,
            createdAt,
            text,
            user,
        });
    }, []);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: color.black }]}>
            <View style={{ flex: 1 }}>
                <View style={styles.messageDetailHeader}>
                    <View style={styles.messageDetailHeaderCenter}>
                        <Ionicons
                            name="chevron-back-outline"
                            size={30}
                            marginRight={20}
                            color={color.white}
                            onPress={() => navigation.goBack()}
                        />
                        <Image
                            source={{
                                uri: route.params.image,
                            }}
                            style={styles.messageDetailHeaderCenterImage}
                        />
                        <View style={styles.messageDetailHeaderCenterRight}>
                            <Text style={{ color: color.white, fontSize: 20 }}>{route.params.name}</Text>
                            <Text style={{ color: 'gray', fontSize: 15 }}>tcuong11</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="call-outline" size={30} color={color.white} />
                        <Ionicons name="videocam-outline" size={33} marginLeft={15} color={color.white} />
                    </View>
                </View>

                {/* <FlatList
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews
                    data={chats}
                    renderItem={({ item }) => <ListMessage content={item.content} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        paddingRight: 10,
                    }}
                /> */}
                <GiftedChat
                    messages={messages}
                    showAvatarForEveryMessage={false}
                    showUserAvatar={false}
                    onSend={(messages) => onSend(messages)}
                    messagesContainerStyle={{
                        backgroundColor: '#000',
                    }}
                    user={{
                        email: FIREBASE_AUTH?.currentUser?.email,
                        avatar: route.params.image,
                        _id: FIREBASE_AUTH?.currentUser?.uid,
                    }}
                    renderSend={(props) => {
                        return (
                            <>
                                <View style={styles.messageDetailFooterLeft}>
                                    <Ionicons
                                        name={props.text.length >= 1 ? 'search' : 'camera'}
                                        size={22}
                                        color={color.white}
                                    />
                                </View>
                                {props.text.length >= 1 ? (
                                    <Text style={styles.messageDetailFooterRightSend}>
                                        <Send {...props} />
                                    </Text>
                                ) : (
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                        <Ionicons name="mic-outline" size={30} color={color.white} marginRight={10} />
                                        <Ionicons name="image-outline" size={30} color={color.white} marginRight={10} />
                                        <Ionicons name="happy-outline" size={30} color={color.white} marginRight={10} />
                                    </View>
                                )}
                            </>
                        );
                    }}
                    renderInputToolbar={(props) => {
                        return (
                            <InputToolbar
                                {...props}
                                containerStyle={{
                                    backgroundColor: '#000',
                                    height: 42,
                                    borderRadius: 20,
                                    backgroundColor: '#3f4346',
                                    borderTopColor: '#3f4346',
                                }}
                            ></InputToolbar>
                        );
                    }}
                />

                {/* <View style={styles.messageDetailFooter}>
                    <View style={styles.messageDetailFooterLeft}>
                        <Ionicons name={textInput.length >= 1 ? 'search' : 'camera'} size={25} color={color.white} />
                    </View>
                    <TextInput
                        style={styles.messageDetailFooterInputBox}
                        onChangeText={setTextInput}
                        value={textInput}
                        placeholder="Message..."
                        placeholderTextColor="#6B6B6B"
                    />
                    <View style={styles.messageDetailFooterRight}>
                        {textInput.length >= 1 ? (
                            <Text style={styles.messageDetailFooterRightSend} onPress={() => saveMessages()}>
                                Send
                            </Text>
                        ) : (
                            <>
                                <Ionicons name="mic-outline" size={30} color={color.white} marginRight={10} />
                                <Ionicons name="image-outline" size={30} color={color.white} marginRight={10} />
                                <Ionicons name="happy-outline" size={30} color={color.white} marginRight={10} />
                            </>
                        )}
                    </View>
                </View> */}
            </View>
        </SafeAreaView>
    );
};

export default MessageDetail;
