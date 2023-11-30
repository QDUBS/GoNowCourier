import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../../../utils/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

function UpdateNameScreen() {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const save = async () => {
    setIsLoading(true);
    try {
      const userProfile = await axios.get(`${BASE_URL}/profiles/${userId}`);
      
      const updateProfile = await axios.put(`${BASE_URL}/profiles`, {
        user_id: userId,
        first_name: firstname,
        last_name: lastname,
        mobile_number: userProfile.mobile_number,
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
            <Text style={styles.headerText}>Update your name</Text>
          </View>
        </View>

        <Text style={styles.heading}>
          Please enter your name as it appears on your ID or passport.
        </Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>First name</Text>
            <TextInput
              style={styles.inputContainerInput}
              placeholder=""
              placeholderTextColor="#333"
              autoCorrect={true}
              autoCapitalize="none"
              value={firstname}
              onChangeText={text => setFirstname(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Last name</Text>
            <TextInput
              style={styles.inputContainerInput}
              placeholder=""
              placeholderTextColor="#333"
              autoCorrect={true}
              autoCapitalize="none"
              value={lastname}
              onChangeText={text => setLastname(text)}
            />
          </View>
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

export default UpdateNameScreen;
