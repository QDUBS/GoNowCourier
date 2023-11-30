import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const EmptyNotifications = ({onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Image
        source={require('../../../assets/images/empty-favorites.jpg')}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.description}>
          There are no orders yet.
        </Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Start Exploring</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmptyNotifications;
