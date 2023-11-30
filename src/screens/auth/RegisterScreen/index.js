import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppRoutes} from '../../../constants/app_routes';
import {BASE_URL} from '../../../utils/config';
import styles from './styles';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const isEmailValid = email => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = password => {
    // Password must have at least one symbol, one lowercase letter, one uppercase letter,
    // and a minimum length of 12 characters.
    const passwordRegex =
      /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    if (!isPasswordValid(password)) {
      setPasswordError(
        'Password must contain a symbol, a lowercase, an uppercase and be at least 12 characters.',
      );
    } else {
      setPasswordError('');
      if (!isEmailValid(email)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
        register(email, password);
      }
    }
  };

  const register = async (email, password) => {
    setIsLoading(true);
    try {
      const user = await axios.post(`${BASE_URL}/users`, {
        email,
        password,
        user_type: 'COURIER',
      });

      const profile = await axios.post(`${BASE_URL}/profiles`, {
        user_id: user.data.id,
        first_name: '',
        last_name: '',
        mobile_number: '',
        photo: '',
      });

      if (user.status === 201) {
        setIsLoading(false);
        setModalVisible(true);
      } else {
        setIsLoading(false);
        setModalVisible(false);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  if (isLoading) {
    return (
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center ',
        }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <View style={styles.registerContainer}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />

          <View style={styles.backgroundImageContainer}>
            <Image
              source={require('../../../assets/images/login-background.jpeg')}
              style={styles.backgroundImage}
            />
          </View>

          <View style={styles.loginFormContainer}>
            <View style={styles.loginFormLogoContainer}>
              <Image
                source={require('../../../assets/images/gonow-foods-logo.png')}
                style={styles.logoImage}
              />
              <Text style={styles.loginFormHeading}>GONOW FOODS</Text>
            </View>

            <View style={styles.registerForm}>
              <View style={styles.loginFormHeadingContainer}>
                <Text style={styles.loginFormHeading2}>SIGN UP</Text>
              </View>

              <View style={styles.loginContainerForm}>
                <View style={styles.loginFormInputContainer}>
                  <Text style={styles.loginFormLabel}>Email</Text>
                  <TextInput
                    style={styles.loginFormInput}
                    placeholder="johnndoe@email.com"
                    placeholderTextColor="#666"
                    autoCorrect={true}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    onChangeText={newText => {
                      setEmail(newText);
                    }}
                  />
                  {emailError ? (
                    <Text style={styles.errorText}>{emailError}</Text>
                  ) : null}
                </View>

                <View style={styles.loginFormInputContainer}>
                  <Text style={styles.loginFormLabel}>Password</Text>
                  <TextInput
                    style={styles.loginFormInput}
                    placeholder="@12345abc#!"
                    placeholderTextColor="#666"
                    secureTextEntry={true}
                    autoCorrect={true}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    onChangeText={newText => {
                      setPassword(newText);
                      setPasswordError('');
                    }}
                  />
                  {passwordError ? (
                    <Text style={styles.errorText}>{passwordError}</Text>
                  ) : null}
                </View>
              </View>

              <View style={styles.loginButtonContainer}>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={handleRegister}
                  activeOpacity={1}>
                  <Text style={styles.loginButtonText}>REGISTER</Text>
                </TouchableOpacity>

                <View style={styles.loginContainerButtons}>
                  <View style={styles.loginLink}>
                    <Text style={styles.loginLinkText}>
                      Already have an account?
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate(AppRoutes.Login)}
                      activeOpacity={1}>
                      <Text style={styles.loginLinkText2}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <StatusBar
            backgroundColor="rgba(52, 52, 52, 0.7)"
            barStyle="dark-content"
          />
          <View style={styles.centeredView}>
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Awesome!</Text>
                <Text style={styles.modalText2}>
                  Your account was created successfully.
                </Text>
                <Text style={styles.modalText2}>
                  Please check your inbox for a verification mail.
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate(AppRoutes.Login);
                  }}>
                  <Text style={styles.textStyle}>OK</Text>
                </Pressable>
              </View>

              <View style={styles.checkmarkContainer}>
                <Image
                  source={require('../../../assets/images/checkmark.png')}
                  style={styles.checkmarkImage}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
