import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: '20%',
    borderRadius: 25,
  },
  info: {
    width: '50%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoHeading: {
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginTop: 20,
    textAlign: 'center',
  },
  description: {
    color: '#666',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.5,
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: '8%',
    paddingVertical: '5%',
    borderColor: '#333',
    borderWidth: 1,
    borderBottomWidth: 1.2,
    borderRadius: 7,
    marginTop: '20%',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
});
