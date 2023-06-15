import { StyleSheet } from 'react-native';
import { test } from '../../Components/Store/Provider';

console.log(test)
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
    uploadSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 10
    },
    uploadSettingCurrently: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    uploadSettingCurrentlyText: {
        fontSize: 18,
    },
    uploadSettingRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    uploadSettingRightChildren:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#555555',
        padding: 7,
        borderRadius: 20
    },
    uploadSettingChildrenText: {
        fontSize: 15,
    },
    uploadSettingRightIconCam: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#555555',
        padding: 5,
        borderRadius: 20,
        marginLeft: 10
    }
});

export default styles;
