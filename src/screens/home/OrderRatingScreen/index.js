import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  Image,
  View,
  Switch,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../../../utils/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Rating, RatingInput} from 'react-native-stock-star-rating';

function OrderRatingScreen() {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const [showName, setShowName] = useState(true);
  const [rating, setRating] = useState(null);
  const [coments, setComments] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    setIsLoading(true);
    try {
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
          </View>
        </View>

        {/* Body */}
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/order-rating.png')}
              style={styles.image}
            />
            <Text style={styles.heading}>
              How was your last order for Lamelo Restaurant?
            </Text>
          </View>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Good</Text>
            <RatingInput
              maxStars={5}
              rating={rating}
              setRating={setRating}
              size={30}
            />
            <View style={styles.inputContainer}>
              <Text style={styles.inputContainerLabel}>Comments</Text>
              <TextInput
                style={styles.inputContainerInput}
                placeholder=""
                placeholderTextColor="#333"
                multiline={true}
                autoCorrect={true}
                autoCapitalize="none"
                value={coments}
                onChangeText={text => setComments(text)}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Show my name</Text>
          <Switch
            value={showName}
            onValueChange={value => setShowName(value)}
            trackColor={{
              false: 'red',
              true: 'lightblue',
            }}
          />
        </View>

        <Pressable style={styles.button} onPress={submit}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default OrderRatingScreen;
