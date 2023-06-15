import {StyleSheet} from 'react-native';
import {COLORS} from '../../Components/Color/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark.black,
    flex: 1
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  reelsMainTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: 15,
  },
  reelsMainTopText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.dark.white,
  },
  reelsMainMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  reelsMainInfo: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    marginBottom: 30,
    padding: 10
  },
  reelsMainInfoLeftUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  reelsMainInfoLeftUserImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 10 
  },
  reelsMainInfoLeftMusic: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  reelsMainInfoRightImage: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: COLORS.dark.white,
    borderRadius: 5
  },
});

export default styles;
