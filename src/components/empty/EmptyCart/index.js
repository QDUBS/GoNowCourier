import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const EmptyCart = ({onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Image
        source={require('../../../assets/images/empty-cart.jpg')}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.infoHeading}>Nothing in your cart yet!</Text>
        <Text style={styles.description}>
          Add an item to see them here.
        </Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>SHOP NOW</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmptyCart;
