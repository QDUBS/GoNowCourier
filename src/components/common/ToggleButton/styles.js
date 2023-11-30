import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  activeToggleButton: {
    width: '50%',
    height: 35,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  inactiveToggleButton: {
    width: '50%',
    height: 33,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  activeToggleText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  inactiveToggleText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
});
