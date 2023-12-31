import {Dimensions, StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  registerContainer: {
    height: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
  backgroundImageContainer: {
    position: 'relative',
  },
  backgroundImage: {
    height: '100%',
    resizeMode: 'cover',
  },
  loginFormContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
  },
  loginFormLogoContainer: {
    height: '35%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    height: 130,
    resizeMode: 'contain',
  },
  loginFormHeading: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 0.5,
    paddingBottom: 5,
  },
  registerForm: {
    backgroundColor: '#fff',
    width: '100%',
    height: '63%',
    padding: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginContainerForm: {
    width: '100%',
    marginTop: '10%',
  },
  loginFormHeadingContainer: {
    width: '100%',
  },
  loginFormHeading2: {
    color: 'rgb(92, 64, 51)',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
    paddingBottom: 5,
  },
  loginFormInputContainer: {
    flexDirection: 'column',
    marginBottom: 30,
  },
  loginFormLabel: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
    paddingBottom: 5,
  },
  loginFormInput: {
    width: '100%',
    height: 40,
    borderWidth: 0,
    borderBottomColor: 'rgb(92, 64, 51)',
    borderBottomWidth: 0.7,
    color: '#000',
  },
  errorText: {
    color: '#900',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.5,
    textAlign: 'center',
    paddingVertical: 5,
  },
  loginContainerButtons: {
    marginTop: '5%',
  },
  loginLink: {width: 'auto', flexDirection: 'row', justifyContent: 'center'},
  loginLinkText: {
    color: 'rgb(92, 64, 51)',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
    paddingBottom: 5,
    textAlign: 'center',
    marginBottom: 5,
  },
  loginLinkText2: {
    color: '#666',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
    paddingBottom: 5,
    textAlign: 'center',
    marginBottom: 5,
    marginLeft: 5,
  },
  loginButtonContainer: {
    width: '100%',
    position: 'relative',
    top: 45,
  },
  loginButton: {
    width: '100%',
    height: 45,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(92, 64, 51)',
    borderRadius: 30,
    marginTop: '10%',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },

  // Modal
  centeredView: {
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    height: '42%',
    position: 'relative',
    alignItems: 'center',
  },
  checkmarkContainer: {
    backgroundColor: 'white',
    width: 80,
    height: 80,
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    position: 'absolute',
    top: '-15%',
  },
  checkmarkImage: {
    width: 80,
    height: 80,
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  button: {
    width: '100%',
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00BA00',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    position: 'absolute',
    bottom: 35,
  },
  buttonOpen: {
    backgroundColor: '#00BA00',
  },
  buttonClose: {
    backgroundColor: '#00BA00',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  modalText: {
    color: '#333',
    fontWeight: '400',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 25,
  },
  modalText2: {
    color: '#333',
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5,
  },
});
