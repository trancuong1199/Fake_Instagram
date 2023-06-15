import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    inputSearch: {
        position: 'relative',
        backgroundColor: '#383738',
        color: '#6B6B6B',
        height: 45,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 40,
        marginTop: 10,
    },
    inputIconSearch: {
        position: 'relative',
        fontSize: 25,
        top: -35,
        left: 10,
        color: '#797979',
        width: 50
    }
});

export default styles;
