import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {createContext, useContext, useEffect, useState} from 'react';
import {BASE_URL} from '../utils/config';

const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const register = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/users`, {
        email,
        password,
        user_type: 'COURIER',
      });

      if (response.status === 201) {
        // setIsSuccessful(true);
        setIsLoading(false);
        return true;
      } else {
        // setIsSuccessful(false);
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/login`,
        {
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      if (response.status === 200) {
        let userInfo = response.data;
        setUserInfo(userInfo.user);
        setUserToken(userInfo.access_token);

        AsyncStorage.setItem('userId', userInfo.user.id);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        AsyncStorage.setItem('userToken', userInfo.access_token);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }

    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userId');
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userToken);
      }

      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log(` An error occured ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userToken,
        userInfo,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
