import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Option from '../../../components/common/Option';
import styles from './styles';

function FAQScreen() {
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.faq__select__container}>
          <TouchableOpacity style={styles.faq__select}>
            <Text style={styles.faq__select__text}>Orders</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.options__container}>
            <Option
              text={'How to pay?'}
              icon={faAlignRight}
              onPress={() => {
                console.log('Pay via cash or card');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FAQScreen;
