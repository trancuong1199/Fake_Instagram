import { React, useState, useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../Service/Firebase';
import * as Keychain from 'react-native-keychain';

import styles from './StylesSignIn';
import { StoreContext } from '../../Components/Store';
import Form from '../../Components/Form';

const SignIn = ({ navigation }) => {
    const auth = FIREBASE_AUTH;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setIsLoggedIn, color } = useContext(StoreContext);

    const onSignIn = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            await Keychain.setGenericPassword(email, response._tokenResponse.idToken);
            setIsLoggedIn(true);
            setEmail('');
            setPassword('');
        } catch (err) {
            if (email == '' || password == '') alert('Email or Password no empty!');
            else alert('Your emal or password wrong!');
            
            console.log(err);
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: color.black }]}>
            <View style={styles.main}>
                <Form
                    nameBtn="Sign in"
                    onBtn={() => onSignIn()}
                    nameAppTitle="Sign in and use more features"
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                />
                <Text style={{ color: color.white }}>
                    Forgot your login details?{' '}
                    <Text
                        style={{ textDecorationLine: 'underline' }}
                        onPress={() => navigation.navigate('ConfirmPassword')}
                    >
                        Get help sign in
                    </Text>
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 50,
                        marginBottom: 20,
                    }}
                >
                    <Text
                        style={{
                            borderWidth: 0.8,
                            borderColor: color.white,
                            width: 155,
                            height: 0.2,
                        }}
                    ></Text>
                    <Text
                        style={{
                            color: color.white,
                            marginLeft: 10,
                            marginRight: 10,
                        }}
                    >
                        Or
                    </Text>
                    <Text
                        style={{
                            borderWidth: 0.8,
                            borderColor: color.white,
                            width: 155,
                            height: 0.2,
                        }}
                    ></Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 80,
                    }}
                >
                    <Ionicons name="logo-facebook" size={22} marginRight={5} color="#5592ff" />
                    <Text style={{ color: color.white }}>Connect with Facebook</Text>
                </View>
                <Text style={{ color: color.white }}>
                    Don't have an account?{' '}
                    <Text style={{ textDecorationLine: 'underline' }} onPress={() => navigation.navigate('SignUp')}>
                        Sign up
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SignIn;
