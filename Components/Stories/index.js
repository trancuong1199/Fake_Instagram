import { React, useState, useContext, useRef, useEffect } from 'react';
import { View, Image, Text, SafeAreaView, FlatList, Dimensions, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { Accounts } from '../../Data/Data';
import styles from './stylesStory';
import { StoreContext } from '../../Components/Store';
import ProgressView from '../../Service/ProgressView';

const Stories = () => {
    const [replyStory, setReplyStory] = useState('');
    const [indexStory, setIndexStory] = useState(1);
    const navigation = useNavigation();
    const { color } = useContext(StoreContext);
    const flatListRef = useRef(null);
    const setWidth = Dimensions.get('window').width;
    const setHeight = Dimensions.get('window').height - 80;

    useEffect(() => {
        let interval;

        interval = setInterval(() => {
            if (indexStory >= Accounts.length) {
                setIndexStory(Accounts.length);
                navigation.goBack();
            } else {
                setIndexStory(indexStory + 1);
                flatListRef.current.scrollToIndex({ animated: true, index: indexStory });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [indexStory]);

    const HandleIconHeart = () => {
        const [iconHeart, setIconHeart] = useState(false);

        return (
            <View style={styles.storyBottomIcon}>
                <Ionicons
                    color={iconHeart ? 'red' : color.white}
                    name={iconHeart ? 'heart' : 'heart-outline'}
                    size={28}
                    marginRight={10}
                    onPress={() => setIconHeart(!iconHeart)}
                />
                <Ionicons color={color.white} name="send-outline" size={25} />
            </View>
        );
    };

    const ListStory = (props) => (
        <View
            style={{
                width: setWidth,
                height: setHeight,
            }}
        >
            <ProgressView />
            <View style={styles.storiesHeader}>
                <View style={styles.storiesHeaderLeft}>
                    <Image source={{ uri: props.image }} style={styles.storiesHeaderLeftImage} />
                    <Text style={styles.storiesHeaderLeftName}>{props.name}</Text>
                </View>
                <View style={styles.storiesHeaderRight}>
                    <Ionicons style={{ color: '#fff' }} name={'ellipsis-horizontal'} size={32} />
                    <Ionicons
                        style={{ color: '#fff', marginLeft: 5 }}
                        name={'close-outline'}
                        size={38}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>
            <Image source={{ uri: props.image }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
            <View style={styles.storyBottom}>
                <TextInput
                    style={styles.storyBottomInput}
                    onChangeText={setReplyStory}
                    value={replyStory}
                    placeholder="Reply..."
                    placeholderTextColor="#6B6B6B"
                />
                <HandleIconHeart />
            </View>
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: color.black }]}>
            <FlatList
                ref={flatListRef}
                data={Accounts}
                snapToInterval={setWidth}
                renderItem={({ item }) => <ListStory image={item.image} name={item.name} />}
                keyExtractor={(item, index) => index}
                decelerationRate={'fast'}
                horizontal
                showsHorizontalScrollIndicator={false}
                disableIntervalMomentum={true}
            />
        </SafeAreaView>
    );
};

export default Stories;
