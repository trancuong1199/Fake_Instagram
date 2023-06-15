import { React, useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { StoreContext } from '../../../Components/Store';

const YourImages = () => {
    const { color } = useContext(StoreContext);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.black }}>
            <View style={{ alignItems: 'center', marginTop: 35 }}>
                <Text style={{ color: color.white, fontSize: 25, fontWeight: 700, marginBottom: 15 }}>Reels</Text>
                <Text style={{ color: 'gray', fontSize: 17, width: 300, textAlign: 'center' }}>
                    Reels is short video on Instagram. The reels' share will play here
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default YourImages;
