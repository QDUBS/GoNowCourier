import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
  // Header
  headerContainer: {
    position: 'relative',
  },
  homeHeader: {
    width: '100%',
    position: 'absolute',
    // top: 50,
    paddingTop: '16%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu_button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 100,
    shadowColor: '#52006A',
    shadowOffset: {width: -2, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  profile__pic: {
    width: 38,
    height: 38,
    borderRadius: 100,
    marginLeft: 10,
    shadowColor: '#52006A',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  // Bottomsheet
  bottomSheet: {
    paddingHorizontal: 10,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.5,
    paddingBottom: 5,
  },
  info: {
    color: 'black',
    letterSpacing: 0.5,
  },
});
