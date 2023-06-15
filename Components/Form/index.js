import {React, useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './stylesForm';
import { StoreContext } from '../../Components/Store';

const Form = props => {
    const { color } = useContext(StoreContext);
    const [passwordVisible, setPasswordVisible] = useState(true);

  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.main}>
              <Text style={[styles.mainNameApp, { color: color.white }]}>Instagram</Text>
              <Text style={[styles.mainTitle, { color: color.white }]}>{props.nameAppTitle}</Text>
              <TextInput
                  style={[styles.mainInput, { backgroundColor: color.inputSearch }]}
                  onChangeText={props.setEmail}
                  value={props.email}
                  placeholder="Email or user name"
                  keyboardType="default"
                  color={color.white}
                  placeholderTextColor={color.white}
                  autoFocus={true}
              />
              <View style={{ flexDirection: 'row' }}>
                  <TextInput
                      style={[styles.mainInput, { position: 'relative', backgroundColor: color.inputSearch }]}
                      onChangeText={props.setPassword}
                      value={props.password}
                      secureTextEntry={passwordVisible}
                      color={color.white}
                      placeholder="Password"
                      placeholderTextColor={color.white}
                  />
                  <Ionicons
                      name={passwordVisible ? 'eye-outline' : 'eye-off-outline'}
                      size={22}
                      marginRight={5}
                      color={color.white}
                      style={styles.iconEye}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                  />
              </View>
              <TouchableOpacity style={styles.mainButton} onPress={props.onBtn}>
                  <Text style={styles.mainButtonText}>{props.nameBtn}</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
};

export default Form;
