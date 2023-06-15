import React, { useState } from 'react';
import { View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { VideoData } from '../../Data/VideoData';

const ReelsContent = () => {
    const setWidth = Dimensions.get('window').width;
    const setHeight = Dimensions.get('window').height;
    const [mutedVolume, setMutedVolume] = useState(false)

    const ListReels = (props) => (
        <TouchableOpacity
            activeOpacity={0.9}
            style={{ position: 'relative', width: setWidth, height: setHeight }}
            onPress={() => setMutedVolume(!mutedVolume)}
        >
            <Video
                source={props.video}
                style={{ position: 'absolute', width: '100%', height: '100%' }}
                resizeMode="cover"
                repeat={true}
                muted={mutedVolume}
            />
        </TouchableOpacity>
    );
    return (
        <FlatList
            data={VideoData}
            snapToInterval={setHeight}
            renderItem={({ item }) => <ListReels video={item.video} title={item.title} />}
            keyExtractor={(item) => item.video}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default ReelsContent;
