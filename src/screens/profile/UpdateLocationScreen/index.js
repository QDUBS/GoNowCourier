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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {BASE_URL, PLACES_API_KEY} from '../../../utils/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function UpdateLocationScreen() {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const [address, setAddress] = useState(null); // Let the restaurants be filtered by the user's state
  const [isLoading, setIsLoading] = useState(false);

  const save = async () => {
    setIsLoading(true);
    try {
      const location = await axios.post(`${BASE_URL}/addresses`, {
        user_id: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        country: '',
        postal_code: '',
        latitude: '',
        longitude: '',
        type: '',
      });

      if (location.status === 201) {
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
              <MaterialIcons name="close" size={24} color={'black'} />
            </Pressable>
            <Text style={styles.headerText}>New place</Text>
          </View>
        </View>

        <View style={styles.form}>
          <GooglePlacesAutocomplete
            query={{key: PLACES_API_KEY}}
            onPress={(data, details = null) => {
              console.log(data.description);
              const city = data.description.split(',')[0];
              setAddress(data.description);
            }}
            placeholder="Search..."
            minLength={1}
            styles={{
              textInput: {
                backgroundColor: '#fff',
                height: 43,
                borderWidth: 0,
                color: '#333',
                fontWeight: '600',
                marginTop: 5,
                borderTopWidth: 1,
                borderTopColor: '#3ABF37',
                borderBottomWidth: 1,
                borderBottomColor: '#3ABF37',
              },
              textInputContainer: {
                backgroundColor: '#fff',
                width: '100%',
                height: 43,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#3ABF37',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              },
              predefinedPlacesDescription: {
                color: '#333',
              },
            }}
            textInputProps={{placeholderTextColor: '#666'}}
            renderLeftButton={() => (
              <Pressable style={styles.menu_button}>
                <FontAwesome name="search" size={15} color={'#666'} />
              </Pressable>
            )}
            renderRightButton={() => (
              <Pressable onPress={() => {}}>
                <Ionicons name="location" size={20} color={'#3ABF37'} />
              </Pressable>
            )}
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

export default UpdateLocationScreen;
