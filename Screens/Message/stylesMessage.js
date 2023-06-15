import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    messageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    messageHeaderText: {
        fontSize: 25,
        fontWeight: 700
    },
    messageHeaderIconDown: {
        fontSize: 25
    },
    messageHeaderIconCam: {
        marginRight: 10,
        fontSize: 35
    },
    inputSearch: {
        position: 'relative',
        height: 40,
        backgroundColor: '#383738',
        color: '#6B6B6B',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 40,
        marginTop: 10,
        fontSize: 15,
    },
    inputIconSearch: {
        position: 'relative',
        fontSize: 25,
        top: -33,
        left: 10,
        color: '#797979',
        width: 50
    },
    messageTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        padding: 10
    },
    messageTitleNow: {
        fontSize: 20,
        fontWeight: 600
    },
    messageTitleWait: {
        color: 'gray',
        fontSize: 17,
        fontWeight: 600
    },
    messageDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    messageDetailImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10
    },
    messageDetailLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    messageDetailName: {
        fontSize: 16
    },
    messageDetailText: {
        color: 'gray',
        fontSize: 16
    }
});

export default styles;
