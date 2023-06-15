import { React, useState, useContext } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../Service/Firebase';
import { StoreContext } from '../../Components/Store';
import styles from './stylesConfirm';

const ConfirmPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const { color } = useContext(StoreContext);
    const auth = FIREBASE_AUTH;
    const verifiEmail = async () => {
        try {
            const response = await sendPasswordResetEmail(auth, email);
            console.log(response);
            alert('Send to email success and check it!');
            setEmail('');
        } catch (err) {
            if (email == '') {
                alert('Email no empty!');
            } else {
                alert('Email wrong!');
            }
            console.log(err);
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: color.black }]}>
            <View style={styles.main}>
                <Text style={[styles.mainNameApp, { color: color.white }]}>Instagram</Text>
                <Text style={[styles.mainTitle, { color: color.white }]}>Verification your password</Text>
                <TextInput
                    style={styles.mainInput}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Enter your email..."
                    keyboardType="default"
                    color={color.white}
                    placeholderTextColor={'#fff'}
                    autoFocus={true}
                />
                <TouchableOpacity style={styles.mainButton} onPress={verifiEmail}>
                    <Text style={{ color: '#fff' }}>Send to email</Text>
                </TouchableOpacity>
                <Text
                    style={{ textDecorationLine: 'underline', color: color.white }}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    Sign in now
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default ConfirmPassword;
