import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const EmptyFavorites = ({onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Image
        source={require('../../../assets/images/empty-favorites.png')}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.infoHeading}>No favorites yet!</Text>
        <Text style={styles.description}>
          Like an item you see? Save them here to your favorites.
        </Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>START EXPLORING</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmptyFavorites;
