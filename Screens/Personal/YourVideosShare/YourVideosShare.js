import { React, useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { StoreContext } from '../../../Components/Store';

const YourVideosShare = () => {
    const { color } = useContext(StoreContext);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.black }}>
            <View style={{ alignItems: 'center', marginTop: 35 }}>
                <Text style={{ color: color.white, fontSize: 20, fontWeight: 700, marginBottom: 15 }}>
                    Images and Videos have your face
                </Text>
                <Text style={{ color: 'gray', fontSize: 17, width: 300, textAlign: 'center' }}>
                    Images and Videos will be here when everyone tag you
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default YourVideosShare;
