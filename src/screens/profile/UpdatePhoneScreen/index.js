import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../../../utils/config';

function UpdatePhoneScreen() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const save = async () => {
    setIsLoading(true);
    try {
      const userProfile = await axios.get(`${BASE_URL}/profiles/${userId}`);

      const updateProfile = await axios.put(`${BASE_URL}/profiles`, {
        user_id: userId,
        first_name: userProfile.firstname,
        last_name: userProfile.lastname,
        mobile_number: phoneNumber,
        photo: '',
      });

      if (updateProfile.status === 201) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    loadData();
  }, [userId]);

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
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerFlex}>
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-backspace"
                size={28}
                color={'black'}
              />
            </Pressable>
            <Text style={styles.headerText}>Update your mobile number</Text>
          </View>
        </View>

        <Text style={styles.heading}>
          We'll send you a verification code shortly.
        </Text>

        <View style={styles.form}>
          <PhoneInput
            defaultValue={phoneNumber}
            defaultCode="NG"
            containerStyle={{
              backgroundColor: 'rgb(0, 0, 0, 0, 0.1)',
              width: '100%',
              height: 50,
              borderWidth: 0,
              borderColor: '#ccc',
              borderWidth: 0.7,
              borderRadius: 10,
              color: '#000',
            }}
            textContainerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              borderLeftColor: '#ccc',
              borderLeftWidth: 0.7,
            }}
            onChangeFormattedText={e => setPhoneNumber(e)}
            autoFocus
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={save}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default UpdatePhoneScreen;
