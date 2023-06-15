import { React, useState, useContext } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import * as Keychain from 'react-native-keychain';
import { Switch } from 'react-native-paper';

import { StoreContext } from '../../Components/Store';
import { Accounts } from '../../Data/Data';
import { t } from '../../Components/Store';
import styles from './stylesPersonal';

const PersonalHeader = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const { setIsLoggedIn, handleColor, color, handleLanguage, language } = useContext(StoreContext);
    const [lightMode, setLightMode] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    

    const SignOut = async () => {
        const logout = await Keychain.resetGenericPassword();
        if (logout) {
            setIsLoggedIn(false);
        }
    };

    return (
        <View style={styles.personalInfo}>
            <View style={styles.personalInfoNavbar}>
                <View style={styles.personalInfoNavbarLeft}>
                    <Ionicons name="lock-closed-outline" size={22} color={color.white} />
                    <Text style={[styles.personalInfoNavbarLeftText, { color: color.white }]}>tr.cuong11</Text>
                    <Ionicons name="chevron-down-outline" size={18} color={color.white} />
                </View>
                <View style={styles.personalInfoNavbarRight}>
                    <Ionicons name="add-circle-outline" size={32} color={color.white} />
                    <Ionicons name="menu-outline" size={32} color={color.white} marginLeft={15} onPress={toggleModal} />
                </View>
                {/* Modal setting menu */}
                <Modal
                    onBackdropPress={() => setModalVisible(false)}
                    onBackButtonPress={() => setModalVisible(false)}
                    isVisible={isModalVisible}
                    swipeDirection="down"
                    onSwipeComplete={toggleModal}
                    animationIn="bounceInUp"
                    animationOut="bounceOutDown"
                    animationInTiming={900}
                    animationOutTiming={500}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={500}
                    style={styles.modal}
                >
                    <View style={[styles.modalContent, { backgroundColor: color.black }]}>
                        <View style={styles.center}>
                            <View style={styles.barIcon} />
                            <View style={styles.modalChildren}>
                                <Ionicons name="settings-outline" size={32} color={color.white} />
                                <Text style={[styles.modalText, { color: color.white }]}>{t('setting')}</Text>
                            </View>
                            <Text style={styles.modalLine}></Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: 300,
                                    marginTop: 13,
                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="swap-vertical-outline" size={32} color={color.white} />
                                    <Text style={[styles.modalText, { color: color.white }]}>{t('darkLight')}</Text>
                                </View>
                                <Switch
                                    value={lightMode}
                                    onValueChange={(value) => {
                                        setLightMode(value);
                                        handleColor(value);
                                    }}
                                    color={'#e00d9a'}
                                />
                            </View>
                            <Text style={styles.modalLine}></Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    width: 260,
                                }}
                            >
                                <View style={styles.modalChildren}>
                                    <Ionicons name="sync-outline" size={32} color={color.white} />
                                    <Text style={[styles.modalText, { color: color.white }]}>VI/EN</Text>
                                </View>
                                <Switch
                                    style={{
                                        marginTop: 13,
                                    }}
                                    value={language}
                                    onValueChange={() => handleLanguage()}
                                    color={'#38d26f'}
                                />
                            </View>
                            <Text style={styles.modalLine}></Text>
                            <View style={styles.modalChildren}>
                                <Ionicons name="qr-code-outline" size={32} color={color.white} />
                                <Text style={[styles.modalText, { color: color.white }]}>{t('qr')}</Text>
                            </View>
                            <Text style={styles.modalLine}></Text>

                            <View style={styles.modalChildren}>
                                <Pressable
                                    onPress={() => SignOut()}
                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                >
                                    <Ionicons name="log-out-outline" size={35} color={color.white} />
                                    <Text style={[styles.modalText, { color: color.white }]}>{t('signOut')}</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.personalInfoDetail}>
                <View style={styles.personalInfoDetailLeft}>
                    {Accounts.map((account, index) =>
                        account.id === props.itemId ? (
                            <View key={index}>
                                <Image
                                    source={{
                                        uri: account.image,
                                    }}
                                    style={styles.personalInfoDetailLeftImage}
                                />
                                <Text style={[styles.personalInfoDetailLeftName, { color: color.white }]}>
                                    {account.name}
                                </Text>
                            </View>
                        ) : null,
                    )}
                </View>
                <View style={styles.personalInfoDetailRight}>
                    <View style={styles.personalInfoDetailRightChildren}>
                        <Text style={[styles.personalInfoDetailRightChildrenNumber, { color: color.white }]}>43</Text>
                        <Text style={{ color: color.white }}>{t('posts')}</Text>
                    </View>
                    <View style={styles.personalInfoDetailRightChildren}>
                        <Text style={[styles.personalInfoDetailRightChildrenNumber, { color: color.white }]}>60</Text>
                        <Text style={{ color: color.white }}>{t('follows')}</Text>
                    </View>
                    <View style={styles.personalInfoDetailRightChildren}>
                        <Text style={[styles.personalInfoDetailRightChildrenNumber, { color: color.white }]}>94</Text>
                        <Text style={{ color: color.white }}>{t('following')}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.personalInfoMore}>
                <View style={styles.personalInfoMoreEdit}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 600 }}>{t('edit')}</Text>
                </View>
                <View style={styles.personalInfoMoreShare}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 600 }}>{t('personalShare')}</Text>
                </View>
                <View style={styles.personalInfoMoreIcon}>
                    <Ionicons name="person-add-outline" size={21} color="#fff" />
                </View>
            </View>
            <View style={styles.personalInfoReels}>
                <View style={styles.personalInfoReelsHighlight}>
                    <Image
                        style={styles.personalInfoReelsHighlightImage}
                        source={{
                            uri: 'https://images.pexels.com/photos/16603079/pexels-photo-16603079/free-photo-of-thanh-ph-ngh-thu-t-d-ng-ph-toa-nha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        }}
                    />
                    <Text style={[styles.personalInfoReelsHighlightText, { color: color.white }]}>
                        {t('highlight')}
                    </Text>
                </View>
                <View style={styles.personalInfoReelsNew}>
                    <View style={[styles.personalInfoReelsNewIcon, { color: color.white }]}>
                        <Ionicons name="add-outline" size={30} color={color.white} />
                    </View>
                    <Text style={[styles.personalInfoReelsNewText, { color: color.white }]}>{t('new')}</Text>
                </View>
            </View>
        </View>
    );
};

export default PersonalHeader;
