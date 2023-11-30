import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAuthContext} from '../../../context/AuthContext';
import styles from './styles';
import {AppRoutes} from '../../../constants/app_routes';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {login} = useAuthContext();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const signIn = () => {
    login(email, password);
  };

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.loginContainer}>
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

          <View style={styles.loginForm}>
            <View style={styles.loginFormHeadingContainer}>
              <Text style={styles.loginFormHeading2}>LOGIN</Text>
            </View>

            <View style={styles.loginContainerForm}>
              <View style={styles.loginFormInputContainer}>
                <Text style={styles.loginFormLabel}>Email</Text>
                <TextInput
                  style={styles.loginFormInput}
                  placeholder="johndoe@email.com"
                  placeholderTextColor="#666"
                  autoCorrect={true}
                  autoCapitalize="none"
                  autoCompleteType="email"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
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
                  keyboardType="default"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
            </View>

            <View style={styles.loginContainerButtons}>
              <TouchableOpacity style={styles.loginLink} activeOpacity={1}>
                <Text style={styles.loginLinkText}>Forgot password</Text>
              </TouchableOpacity>

              <View style={styles.loginLink}>
                <Text style={styles.loginLinkText}>Need a new account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(AppRoutes.Register)}
                  activeOpacity={1}>
                  <Text style={styles.loginLinkText2}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.loginButtonContainer}>
              <Pressable style={styles.loginButton} onPress={signIn}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
