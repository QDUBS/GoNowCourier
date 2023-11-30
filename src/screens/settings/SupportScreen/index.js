import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown';
import {SelectList} from 'react-native-dropdown-select-list';
import {categories} from '../../../data/support_categories';

function SupportScreen() {
  const navigation = useNavigation();
  const [category, setCategory] = useState('');
  const [issue, setIssue] = useState('');

  const sendMessage = () => {
    console.log('Sending support message...');
  };

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
            <Text style={styles.headerText}>Support</Text>
          </View>
        </View>

        <Text style={styles.heading}>
          For further enquiries visit the FAQ section.
        </Text>

        <View style={styles.form}>
          <SelectList
            data={categories}
            setSelected={setCategory}
            boxStyles={{ backgroundColor: 'white', marginBottom: 20 }}
            
            dropdownStyles={{}}
            dropdownItemStyles={{
              borderBottomColor: '#ccc',
              borderBottomWidth: 0.5,
              paddingVertical: 12,
            }}
            dropdownTextStyles={{color: 'black'}}
          />

          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Describe your issue</Text>
            <TextInput
              style={styles.inputContainerInput}
              placeholder=""
              placeholderTextColor="#333"
              autoCorrect={true}
              autoCapitalize="none"
              multiline={true}
              value={issue}
              onChangeText={text => setIssue(text)}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send message</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default SupportScreen;
