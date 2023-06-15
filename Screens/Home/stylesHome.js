import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    layout: {
        padding: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons: {
        flexDirection: 'row',
    },
    iconHeart: {
        position: 'relative',
    },  
    iconHeartNoti: {
        position: 'absolute',
        width: 9,
        height: 9,
        backgroundColor: 'red',
        borderRadius: 50,
        left: 21,
        top: 16
    },  
    nameApp: {
        fontSize: 35,
        fontFamily: 'DancingScript-VariableFont_wght',
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
    },
    likesDetail: {
        fontWeight: 700
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
    },
    newsMainStatusText: {
        fontSize: 14
    },
    newsMainStatusTag: {
        color: '#46AFF0'
    },
    newsMainStatusMore: {
        color: '#A5A7A9'
    },
    newsMainStatusComment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },  
    newsMainStatusCommentInput: {
        height: 35,
        width: '70%',
        color: '#6B6B6B',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        fontSize: 15,
        paddingLeft: 0
    },
    newsMainStatusCommentRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    newsMainStatusCommentIconHand: {
        color: '#EDF90D',
        marginRight: 5
    }
})

export default styles;
