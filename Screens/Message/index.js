import { React, useState, useContext } from 'react';
import { View, Text, SafeAreaView, FlatList, TextInput, Image, Pressable } from 'react-native';
import styles from './stylesMessage';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Accounts } from '../../Data/Data';
import { StoreContext } from '../../Components/Store';
import { ListNews } from '../../Components/ListNews/ListNews';

const Message = ({ navigation }) => {
    const { color } = useContext(StoreContext);
    const [text, onChangeText] = useState('');

    const ListMessages = (props) => (
        <View style={styles.messageDetail}>
            <Pressable
                style={styles.messageDetailLeft}
                onPress={() => navigation.navigate('MessageDetail', { image: props.image, name: props.name })}
            >
                <Image style={styles.messageDetailImage} source={{ uri: props.image }} />
                <View>
                    <Text style={[styles.messageDetailName, { color: color.white }]}>{props.name}</Text>
                    <Text style={styles.messageDetailText}>{props.message} - Now</Text>
                </View>
            </Pressable>
            <Ionicons name="camera-outline" size={28} marginRight={5} color={color.white} />
        </View>
    );
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: color.black }]}>
            <View style={styles.messageHeader}>
                <View style={styles.flexRow}>
                    <Ionicons
                        name="chevron-back-outline"
                        size={28}
                        marginRight={5}
                        color={color.white}
                        onPress={() => navigation.navigate('Home')}
                    />
                    <Text style={[styles.messageHeaderText, { color: color.white }]}>tr.cuong11</Text>
                    <Ionicons
                        name="chevron-down-outline"
                        size={28}
                        marginRight={5}
                        style={[styles.messageHeaderIconDown, { color: color.white }]}
                    />
                </View>

                <View style={styles.flexRow}>
                    <Ionicons
                        name="videocam-outline"
                        size={28}
                        marginRight={5}
                        color={color.white}
                        style={styles.messageHeaderIconCam}
                    />
                    <Ionicons name="document-text-outline" size={28} marginRight={5} color={color.white} />
                </View>
            </View>
            <View>
                <TextInput
                    style={[styles.inputSearch, { backgroundColor: color.inputSearch }]}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Search..."
                    placeholderTextColor="#6B6B6B"
                />
                <Ionicons name="search-outline" size={28} marginRight={5} style={styles.inputIconSearch} />
            </View>
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    removeClippedSubviews
                    data={Accounts}
                    renderItem={({ item }) => <ListNews name={item.name} image={item.image} />}
                    keyExtractor={(item) => item.name}
                />
            </View>
            <View style={styles.messageTitle}>
                <Text style={[styles.messageTitleNow, { color: color.white }]}>Tin nhắn</Text>
                <Text style={styles.messageTitleWait}>Tin nhắn đang chờ</Text>
            </View>
            <FlatList
                data={Accounts}
                renderItem={({ item }) => <ListMessages name={item.name} image={item.image} message={item.message} />}
                keyExtractor={(item) => item.name}
            />
        </SafeAreaView>
    );
};

export default Message;
