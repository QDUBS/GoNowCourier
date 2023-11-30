import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

const ToggleButton = ({text, activeTab, setActiveTab}) => {
  return (
    <Pressable
      style={
        activeTab === text
          ? styles.activeToggleButton
          : styles.inactiveToggleButton
      }
      onPress={setActiveTab}>
      <Text
        style={
          activeTab === text
            ? styles.activeToggleText
            : styles.inactiveToggleText
        }>
        {text}
      </Text>
    </Pressable>
  );
};

export default ToggleButton;
