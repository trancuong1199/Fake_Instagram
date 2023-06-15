import { StyleSheet } from 'react-native';
import { COLORS } from '../Color/color';

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
    },  
    mainNameApp: {
        fontSize: 35,
        fontFamily: 'DancingScript-VariableFont_wght',
        color: COLORS.dark.white,
        marginBottom: 50
    },
    mainTitle: {
        color: COLORS.dark.white,
        fontSize: 17,
        marginBottom: 30
    },
    mainInput: {
        height: 40,
        width: 350,
        marginBottom: 13,
        borderWidth: 1,
        padding: 10,
    },
    mainButton: {
        height: 40,
        width: 350,
        alignItems: 'center',
        backgroundColor: '#F56040',
        padding: 10,
        marginBottom: 15,
    },
    mainButtonText: {
        color: COLORS.dark.white
    },
    iconEye: {
        position: 'absolute',
        right: 10,
        top: 8,
    }
});

export default styles;
