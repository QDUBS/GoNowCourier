import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const Order = ({order, onPress}) => {
  const [user, setUser] = useState(null);

  const formatAddress = address => {
    const formatted_address = `${address.house_no} ${address.street1}, ${address.city}, ${address.state},  ${address.country}`;
    return formatted_address;
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: order.restaurant?.image,
        }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{order?.restaurant?.name}</Text>
        <Text style={styles.address}>
          {formatAddress(order?.restaurant?.user?.address_data)}
        </Text>
        <Text style={styles.price}>
          &#x20A6;{order?.total.toLocaleString()}
        </Text>

        <Text style={styles.delivery}>Delivery Details</Text>
        <Text style={styles.name2}>
          {order?.user?.profile_data?.first_name}{' '}
          {order?.user?.profile_data?.last_name}
        </Text>
        <Text style={styles.address}>
          {formatAddress(order?.user?.address_data)}
        </Text>
      </View>
    </Pressable>
  );
};

export default Order;
