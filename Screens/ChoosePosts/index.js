import { React, useState, useRef, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, Image, Pressable, FlatList, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PERMISSIONS, request } from 'react-native-permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { StoreContext } from '../../Components/Store';

import styles from './stylesChoose';

const ChoosePosts = ({ navigation }) => {
    const state = useContext(StoreContext);
    const { color } = useContext(StoreContext);
    const [selectImage, setSelectImage] = useState(null);
    const [prevImage, setPrevImage] = useState(null);
    const [imagesData, setImagesData] = useState([]);
    const prevUri = useRef();

    const ListImages = (props) => (
        <Pressable onPress={() => setSelectImage(props.image)}>
            <View margin={2}>
                <Image source={{ uri: props.image }} width={130} height={120} />
            </View>
        </Pressable>
    );

    const checkImage = () => {
        if (selectImage == null || prevImage == null) {
            Alert.alert('Choose Images', 'Choose images or videos', [
                {
                    text: 'Ok, sure',
                    onPress: () => console.log('Ok'),
                },
            ]);
        } else {
            navigation.navigate('UploadPost', {
                image: selectImage,
            });
        }
    };

    useEffect(() => {
        const askForPermissonsStorage = async (permission) => {
            await request(permission).then((result) => {
                CameraRoll.getPhotos({ first: 20, assetType: 'Photos' }).then((data) => {
                    setImagesData(data.edges);
                });
            });
        };

        askForPermissonsStorage(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    }, [selectImage]);

    useEffect(() => {
        if (selectImage == null) {
            console.log('');
        } else {
            prevUri.current = selectImage;
            setPrevImage(prevUri.current);
        }
    }, [selectImage]);

    const ImagePicker = () => {
        let optionsImage = {
            storageOptions: {
                path: 'image',
            },
        };

        launchImageLibrary(optionsImage, (response) => {
            const uri = response.assets ? response.assets[0].uri : null;
            setSelectImage(uri);
        });
    };

    useEffect(() => {
        if (state.checkUpload) {
            setPrevImage(null);
            state.setCheckUpload(false);
        }
    }, [state.checkUpload]);

    const askForPermissonsCamera = async (permission) => {
        let optionsCamera = {
            mediaType: 'photo',
            saveToPhotos: true,
            includeBase64: false,
        };

        await request(permission).then((result) => {
            launchCamera(optionsCamera, (res) => {
                const source = res.assets ? res.assets[0].uri : null;
                setSelectImage(source);
            });
        });
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: color.black }]}>
            <View>
                <View style={styles.uploadHeader}>
                    <Ionicons
                        name="close-outline"
                        size={35}
                        marginLeft={5}
                        color={color.white}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={[styles.uploadHeaderTextNew, { color: color.white }]}>New post</Text>
                    <Pressable onPress={() => checkImage()}>
                        <Text style={styles.uploadHeaderTextNext}>Next</Text>
                    </Pressable>
                </View>
                <View style={{ width: '100%', height: 300 }}>
                    {prevImage != null ? (
                        <Image
                            style={{ width: '100%', height: 300 }}
                            source={{
                                uri: selectImage != null ? selectImage : prevImage,
                            }}
                        />
                    ) : (
                        <Text style={{ color: 'gray', textAlign: 'center', top: 100 }}>Let take images or videos</Text>
                    )}
                </View>
                <View style={styles.uploadSetting}>
                    <View style={styles.uploadSettingCurrently}>
                        <Text style={[styles.uploadSettingCurrentlyText, { color: color.white }]}>Currently</Text>
                        <Ionicons name="chevron-down-outline" size={23} marginLeft={5} color={color.white} />
                    </View>
                    <View style={styles.uploadSettingRight}>
                        <Pressable onPress={() => ImagePicker()}>
                            <View style={styles.uploadSettingRightChildren}>
                                <Ionicons name="documents-outline" size={22} marginRight={5} color={'#fff'} />
                                <Text style={[styles.uploadSettingChildrenText, { color: '#fff' }]}>Choose posts</Text>
                            </View>
                        </Pressable>

                        <View style={styles.uploadSettingRightIconCam}>
                            <Ionicons
                                name="camera-outline"
                                size={22}
                                color={'#fff'}
                                onPress={() => askForPermissonsCamera(PERMISSIONS.ANDROID.CAMERA)}
                            />
                        </View>
                    </View>
                </View>
            </View>
            {imagesData.length < 1 ? (
                <Text style={{ color: 'gray', textAlign: 'center', top: 100 }}>
                    No images, turn on permission storage
                </Text>
            ) : (
                <FlatList
                    data={imagesData}
                    renderItem={({ item }) => <ListImages image={item.node.image.uri} />}
                    keyExtractor={(item, index) => index}
                    numColumns={3}
                />
            )}
        </SafeAreaView>
    );
};

export default ChoosePosts;
