import { React, useContext } from 'react';
import { View, SafeAreaView } from 'react-native';

import styles from './stylesPersonal';
import PersonalMain from './PersonalMain/PersonalMain';
import PersonalHeader from './PersonalHeader';
import { StoreContext } from '../../Components/Store';

const Personal = ({ route }) => {
    const { itemId } = route.params;
    const { color } = useContext(StoreContext);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: color.black }]}>
            <View style={styles.personal}>
                <PersonalHeader itemId={itemId} />
            </View>
            <PersonalMain />
        </SafeAreaView>
    );
};

export default Personal;
