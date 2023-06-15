import { React, useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

const ProgressView = () => {
    const progressAnim = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        Animated.timing(progressAnim, {
            toValue: 375,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    }, [progressAnim]);

    return (
        <View
            style={{
                backgroundColor: 'gray',
                width: 375,
                borderRadius: 5,
                position: 'absolute',
                zIndex: 1,
                marginTop: 5,
                marginLeft: 8,
                height: 4,
                borderColor: 'gray',
            }}
        >
            <Animated.Text
                style={{
                    backgroundColor: '#fff',
                    width: progressAnim,
                    borderRadius: 5,
                    height: 4,
                    borderColor: 'gray',
                }}
            ></Animated.Text>
        </View>
    );
};

export default ProgressView;
