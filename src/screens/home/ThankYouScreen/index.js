import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppRoutes } from '../../../constants/app_routes';
import styles from './styles';

function ThankYouScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <Image
            source={require('../../../assets/images/thank-you.png')}
            style={styles.image}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(AppRoutes.Home)}>
          <Text style={styles.buttonText}>DONE</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default ThankYouScreen;
