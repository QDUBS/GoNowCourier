import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

function RatingsScreen() {
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <ScrollView
        style={styles.body}
        showsVerticalScrollIndicator={false}></ScrollView>

    </SafeAreaView>
  );
}

export default RatingsScreen;
