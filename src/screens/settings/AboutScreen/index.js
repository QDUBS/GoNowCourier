import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

function AboutScreen() {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.options__container}>
            {/* Contact */}
            <View style={styles.options__container__heading}>
              <Text style={styles.options__container__heading__text}>
                Contact us
              </Text>
            </View>

            <Text style={styles.options__container__description}>
              If you have any query, please call us on: 017777166, or send an
              email to our customer service email: support@gonow.deliveries
            </Text>

            {/* Credits */}
            <View style={styles.options__container__heading}>
              <Text style={styles.options__container__heading__text}>
                Credits
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutScreen;
