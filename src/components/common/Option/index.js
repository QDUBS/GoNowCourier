import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

const Option = ({menuItem, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      
    </Pressable>
  );
};

export default Option;
