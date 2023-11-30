import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const EmptyOrders = ({onPress}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Image
        source={require('../../../assets/images/empty-order.png')}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.infoHeading}>There are no orders yet!</Text>
        <Text style={styles.description}>
          Like an item you see? Place an order.
        </Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>SHOP NOW</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmptyOrders;
