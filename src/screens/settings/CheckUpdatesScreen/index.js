import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

function CheckUpdatesScreen() {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.options__container}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CheckUpdatesScreen;
