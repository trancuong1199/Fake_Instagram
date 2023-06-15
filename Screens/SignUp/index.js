import { React, useState, useContext } from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import styles from './stylesSignUp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { FIREBASE_AUTH } from '../../Service/Firebase';
import Form from '../../Components/Form';
import { StoreContext } from '../../Components/Store';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { color } = useContext(StoreContext);
    const auth = FIREBASE_AUTH;

    const onSignUp = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Create account success!');
            setEmail('');
            setPassword('');
        } catch (err) {
            if (email == '' || password == '') {
                alert('Email or Password no empty!');
            }
            console.log(err);
        }
    };

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: color.black}]}>
            <View style={{ top: 120, alignItems: 'center' }}>
                <Form
                    nameAppTitle="Sign up and use more features"
                    nameBtn="Sign up"
                    email={email}
                    pass={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    onBtn={() => onSignUp()}
                />
                <Pressable
                    style={{ flexDirection: 'row', marginTop: 20 }}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text
                        style={{ textDecorationLine: 'underline', color: color.white }}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        Sign in now
                    </Text>
                    <Ionicons name="log-in-outline" size={22} marginLeft={5} color= {color.white} />
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
