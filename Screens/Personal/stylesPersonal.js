import { StyleSheet } from 'react-native';
import { COLORS } from '../../Components/Color/color';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },
    personalInfo: {
        padding: 15,
    },
    personalInfoNavbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    personalInfoNavbarLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    personalInfoNavbarLeftText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 2,
    },
    personalInfoNavbarRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    personalInfoDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    personalInfoDetailLeftImage: {
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    personalInfoDetailLeftName: {
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'center',
    },
    personalInfoDetailRight: {
        flexDirection: 'row',
    },
    personalInfoDetailRightChildren: {
        alignItems: 'center',
        marginLeft: 25,
    },
    personalInfoDetailRightChildrenNumber: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    personalInfoMore: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25,
        marginBottom: 20,
    },
    personalInfoMoreEdit: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 110,
        backgroundColor: '#303134',
        borderRadius: 10,
    },
    personalInfoMoreShare: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 190,
        backgroundColor: '#303134',
        borderRadius: 10,
    },
    personalInfoMoreIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 45,
        backgroundColor: '#303134',
        borderRadius: 10,
    },
    personalInfoReels: {
        flexDirection: 'row',
    },
    personalInfoReelsHighlight: {
        marginRight: 10,
    },
    personalInfoReelsHighlightImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#303134',
    },
    personalInfoReelsHighlightText: {
        marginTop: 5,
    },
    personalInfoReelsNewIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#303134',
    },
    personalInfoReelsNewText: {
        marginTop: 5,
        textAlign: 'center',
    },

    //// Modal
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        paddingTop: 12,
        paddingHorizontal: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        minHeight: 400,
        paddingBottom: 20,
    },
    center: {
        alignItems: 'center',
    },
    barIcon: {
        width: 70,
        height: 5,
        backgroundColor: '#bbb',
        borderRadius: 3,
        marginBottom: 30,
    },
    modalChildren: {
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    modalText: {
        fontSize: 18,
        marginLeft: 12,
    },
    modalLine: {
        width: '90%',
        height: 1,
        backgroundColor: '#6B6B6B',
        marginTop: 10,
    },
});

export default styles;
