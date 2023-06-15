import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    messageDetailHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },

    messageDetailHeaderCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    messageDetailHeaderCenterImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },

    messageDetailHeaderCenterRight: {
        marginLeft: 10,
    },
    messageDetailFooter: {
        marginBottom: 10,
    },
    messageDetailFooterInputBox: {
        position: 'relative',
        height: 45,
        width: '100%',
        color: '#6B6B6B',
        borderWidth: 1,
        borderColor: '#6B6B6B',
        borderRadius: 40,
        padding: 10,
        paddingLeft: 50,
        fontSize: 18,
    },
    messageDetailFooterLeft: {
        position: 'absolute',
        backgroundColor: '#3880ff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        left: 5,
        top: 5,
        borderRadius: 35,
    },

    messageDetailFooterRight: {
        position: 'absolute',
        flexDirection: 'row',
        right: 0,
        top: 5,
    },

    messageDetailFooterRightSend: {
        color: '#3880ff',
        fontSize: 20,
        fontWeight: 700,
        right: 10,
    },
});

export default styles;
