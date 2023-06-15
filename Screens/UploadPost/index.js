import { React, useState, useContext } from 'react';
import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StoreContext } from '../../Components/Store';

import styles from './styleUploadPost';

const UploadPost = ({ navigation, route }) => {
    const state = useContext(StoreContext);
    const [content, setContent] = useState('');
    const { image } = route.params;

    const onUpload = () => {
        state.setCheckUpload(true);
        navigation.navigate('Home', { image: image, content: content });
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: state.color.black }]}>
            <View>
                <View style={styles.uploadHeader}>
                    <Ionicons
                        name="chevron-back-outline"
                        size={30}
                        marginLeft={5}
                        color={state.color.white}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={[styles.uploadHeaderTextNew, { color: state.color.white }]}>New post</Text>
                    <Text style={styles.uploadHeaderTextNext} onPress={() => onUpload()}>
                        Upload
                    </Text>
                </View>
                <View style={styles.uploadContent}>
                    <Image
                        style={styles.uploadContentImage}
                        source={{
                            uri: image,
                        }}
                    />
                    <TextInput
                        style={[styles.uploadContentInput, { color: state.color.white }]}
                        onChangeText={setContent}
                        value={content}
                        placeholder="Write something..."
                        keyboardType="default"
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.lane}></View>
                <View style={styles.uploadOptions}>
                    <Text style={[styles.uploadOptionsText, { color: state.color.white }]}>Tag others</Text>
                    <Ionicons name="chevron-forward-outline" size={30} color={'gray'} />
                </View>
                <View style={styles.lane}></View>
                <View style={styles.uploadOptions}>
                    <Text style={[styles.uploadOptionsText, { color: state.color.white }]}>Location more</Text>
                    <Ionicons name="chevron-forward-outline" size={30} color={'gray'} />
                </View>
                <View style={styles.uploadLocationBox}>
                    <View style={styles.uploadLocationBoxChildren}>
                        <Text style={[styles.uploadLocationBoxChildrenText, { color: '#fff' }]}>Ho Chi Minh City</Text>
                    </View>
                    <View style={styles.uploadLocationBoxChildren}>
                        <Text style={[styles.uploadLocationBoxChildrenText, { color: '#fff' }]}>
                            Ho Chi Minh City, Distric 2
                        </Text>
                    </View>
                </View>
                <View style={styles.lane}></View>
                <View style={styles.uploadOptions}>
                    <Text style={[styles.uploadOptionsText, { color: state.color.white }]}>Add music</Text>
                    <Ionicons name="chevron-forward-outline" size={30} color={'gray'} />
                </View>
                <View style={styles.uploadLocationBox}>
                    <View style={styles.uploadLocationBoxChildren}>
                        <Ionicons name="musical-notes-outline" size={22} marginRight={5} color="#fff" />
                        <Text style={[styles.uploadLocationBoxChildrenText, { color: '#fff' }]}>Nice day - JWS</Text>
                    </View>
                    <View style={styles.uploadLocationBoxChildren}>
                        <Ionicons name="musical-notes-outline" size={22} marginRight={5} color="#fff" />
                        <Text style={[styles.uploadLocationBoxChildrenText, { color: '#fff' }]}>
                            Head In The Clouds - Hayd
                        </Text>
                    </View>
                </View>
                <View style={styles.lane}></View>
                <View style={styles.uploadOptionsSetting}>
                    <Text style={[styles.uploadOptionsText, { color: state.color.white }]}>Share on facebook</Text>
                    <Text style={{ color: 'gray' }}>Share with Tran Cuong name. For friends</Text>
                </View>
                <View style={styles.lane}></View>
                <View style={styles.uploadOptions}>
                    <Text style={[styles.uploadOptionsText, { color: state.color.white }]}>Advanced Settings</Text>
                    <Ionicons name="chevron-forward-outline" size={30} color={'gray'} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default UploadPost;
