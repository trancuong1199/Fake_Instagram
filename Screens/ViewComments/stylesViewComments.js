import { StyleSheet } from 'react-native';
import {COLORS} from '../../Components/Color/color';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewCommentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
  
    viewCommentHeaderTitle: {
        fontSize: 18,
        fontWeight: 700
    },
    viewCommentAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderTopWidth: 0.5,
        paddingTop: 10,
        borderTopColor: 'gray'
    },
    viewCommentAccountImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    viewCommentAccountName: {
        fontWeight: 700,
        fontSize: 15
    },
    viewCommentAccountDays: {
        color: 'gray'
    },
    viewCommentAccountContent: {
        fontSize: 17
    },
    viewCommentUser: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        borderBottomColor: 'gray',
    },
    newsMainStatusComment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },  
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 5
    },
    newsMainStatusCommentInput: {
        position: 'relative',
        height: 35,
        width: '85%',
        color: '#6B6B6B',
        borderWidth: 1,
        borderColor: '#6B6B6B',
        borderRadius: 15,
        padding: 10,
        fontSize: 15,
    },
    newsMainStatusCommentRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default styles;
