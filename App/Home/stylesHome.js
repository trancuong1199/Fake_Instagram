import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    flatlist: {
        paddingLeft: 10,
        paddingRight: 10,
    },  
    layout: {
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons: {
        flexDirection: 'row',
    },
    nameApp: {
        fontSize: 35,
        fontFamily: 'DancingScript-VariableFont_wght',
        color: '#fff',
    },
    story: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#FF8501'
    },
    newPost: {
        flexDirection: 'row',
        marginTop: 20,
    },
    nameAccount: {
        fontSize: 17,
        fontWeight: '500',
        color: '#fff'
    },
    accountPost: {
        alignItems: 'center',
        marginRight: 10,
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: 'gray',
        marginTop: 10,
        marginBottom: 10,
    },
    newsMain: {
        marginBottom: 20
    },
    newsMainIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },  
    newsMainName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff'
    },
    newsMainTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    newsMainTopRight: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 10
    },
    more: {
        fontSize: 20,
        fontWeight: '800',
        color: '#fff'
    },
    newsMainPost: {
        width: '100%',
        height: 300,
        marginBottom: 8
    },
    newsMainTitle: {
        fontSize: 13,
        fontWeight: 600,
        marginTop: 10,
        color: '#fff',
    },
    likesDetail: {
        fontWeight: 700
    },
    iconWhite: {
        color: '#fff'
    },
    mainBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: "100%",
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
    }
})

export default styles;
