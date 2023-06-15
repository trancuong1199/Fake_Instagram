import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressBar: {
        position: 'absolute',
        zIndex: 1,
        marginTop: 5,
        marginLeft: 8,
        height: 4,
        borderColor: 'gray',
        backgroundColor: 'gray',
    },
    storiesHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
        padding: 10,
        paddingTop: 20,
    },
    storiesHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    storiesHeaderLeftImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    storiesHeaderLeftName: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 5,
    },
    storiesHeaderRight: { flexDirection: 'row', alignItems: 'center' },
    storyBottom: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1,
        marginBottom: 10,
        marginTop: 10,
    },
    storyBottomInput: {
        height: 35,
        width: '70%',
        color: '#6B6B6B',
        borderWidth: 1,
        borderColor: '#6B6B6B',
        borderRadius: 15,
        padding: 10,
        fontSize: 15,
    },
    storyBottomIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default styles;
