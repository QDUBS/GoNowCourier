import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  body: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 600,
    resizeMode: 'contain',
  },
  buttonContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginTop: 80,
  },
  button: {
    width: '100%',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#3ABF37',
    fontSize: 14,
    fontWeight: '600',
  },
});
