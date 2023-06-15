import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    uploadHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    uploadHeaderTextNew: {
        fontSize: 18,
        fontWeight: 700
    },
    uploadHeaderTextNext: {
        color: '#5592ff',
        fontSize: 18,
    },
    uploadContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    uploadContentImage : {
        width: 50,
        height: 80
    },
    uploadContentInput: {
        height: 40,
        width: 350,
        marginBottom: 13,
        borderWidth: 1,
        padding: 10,
    },
    uploadOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    lane: {
        width: '100%',
        padding: 0.2,
        backgroundColor: 'gray',
        marginTop: 10,
        marginBottom: 10,
    },
    uploadOptionsText: {
        fontSize: 18
    },
    uploadLocationBox: {
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },  
    uploadLocationBoxChildren: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#555555',
        padding: 10,
        borderRadius: 15,
        marginRight: 10,
    },
    uploadLocationBoxChildrenText: {
        fontSize: 15,
    },
    uploadOptionsSetting : {
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default styles;
