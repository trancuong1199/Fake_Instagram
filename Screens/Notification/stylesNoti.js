import { StyleSheet } from 'react-native';
import {COLORS} from '../../Components/Color/color';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },
    notiHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 160
    },
    notiHeaderText: {
        fontSize: 23,
        marginLeft: 5,
        fontWeight: 700
    },
    notiContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    notiContentTitle: {
        fontSize: 20,
        fontWeight: 700,
        marginTop: 10,
        paddingLeft: 10
    },
    notiContentMain: {
        marginTop: 15,
        paddingLeft: 5
    },  
    notiContentMainLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notiContentMainLeftImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    notiContentMainLeftText: {
        fontSize: 16,
        width: 200,
        marginLeft: 10
    },
    notiContentMainLeftTextDays: {
        color: 'gray'
    },
    notiContentFollow: {
        height: 30,
        width: 80,
        backgroundColor: '#194bfd',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 5
    },
});

export default styles;
