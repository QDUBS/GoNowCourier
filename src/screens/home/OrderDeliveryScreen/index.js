import BottomSheet from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  PermissionsAndroid,
  Pressable,
  StatusBar,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {OrderStatuses} from '../../../constants/order_statuses';
import {BASE_URL, MAP_DIRECTIONS_API_KEY} from '../../../utils/config';
import {ORDER_STATUSES} from '../../../utils/order_status';
import styles from './styles';
import {AppRoutes} from '../../../constants/app_routes';

const OrderDeliveryScreen = () => {
  const [userId, setUserId] = useState(null);
  const [order, setOrder] = useState(null);
  const [driverLocation, setDriverLocation] = useState(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [deliveryStatus, setDeliveryStatus] = useState(
    ORDER_STATUSES.READY_FOR_PICKUP,
  );
  const [driverClose, setDriverClose] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;

  const bottomSheetRef = useRef(null);
  const mapRef = useRef(null);
  const snapPoints = useMemo(() => ['12%', '95%'], []);
  const {width, height} = useWindowDimensions();

  const getOrder = async id => {
    if (!id) {
      setOrder(null);
      return;
    }
    try {
      const order = await axios.get(`${BASE_URL}/orders/${id}`);
      setOrder(order.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const acceptOrder = async id => {
    try {
      const acceptedOrder = await axios.put(`${BASE_URL}/orders/${id}`, {
        user_id: order?.user_id,
        courier_id: `${userId}`,
        restaurant_id: order?.restaurant_id,
        total: order?.total,
        status: OrderStatuses.ACCEPTED,
      });

      const updatedOrder = await axios.get(`${BASE_URL}/orders/${id}`);
      setOrder(updatedOrder.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const pickupOrder = async id => {
    try {
      const pickedupOrder = await axios.put(`${BASE_URL}/orders/${id}`, {
        user_id: order?.user_id,
        courier_id: order?.courier_id,
        restaurant_id: order?.restaurant_id,
        total: order?.total,
        status: OrderStatuses.PICKED_UP,
      });

      const updatedOrder = await axios.get(`${BASE_URL}/orders/${id}`);
      setOrder(updatedOrder.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const finishOrder = async id => {
    try {
      const finishedOrder = await axios.put(`${BASE_URL}/orders/${id}`, {
        user_id: order?.user_id,
        courier_id: order?.courier_id,
        restaurant_id: order?.restaurant_id,
        total: order?.total,
        status: OrderStatuses.COMPLETED,
      });

      const updatedOrder = await axios.get(`${BASE_URL}/orders/${id}`);
      setOrder(updatedOrder.data);
      navigation.navigate(AppRoutes.OrderRatingScreen, {id: updatedOrder.id});
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const onPress = async () => {
    if (order?.status === OrderStatuses.READY_FOR_PICKUP) {
      bottomSheetRef.current?.collapse();
      mapRef.current?.animateToRegion({
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      });
      acceptOrder(id);
    }
    if (order?.status === OrderStatuses.ACCEPTED) {
      bottomSheetRef.current?.collapse();
      pickupOrder();
    }
    if (order?.status === OrderStatuses.PICKED_UP) {
      finishOrder();
      bottomSheetRef.current?.collapse();
      navigation.goBack();
    }
  };

  const renderButtonTitle = () => {
    if (order?.status === OrderStatuses.READY_FOR_PICKUP) {
      return 'Accept Order';
    }
    if (order?.status === OrderStatuses.ACCEPTED) {
      return 'Pickup Order';
    }
    if (order?.status === OrderStatuses.PICKED_UP) {
      return 'Complete Delivery';
    }
  };

  const disableButton = () => {
    if (order?.status == OrderStatuses.READY_FOR_PICKUP) {
      return false;
    }
    if (order?.status == OrderStatuses.ACCEPTED && driverClose) {
      return false;
    }
    if (order?.status == OrderStatuses.PICKED_UP && driverClose) {
      return false;
    }
    return true;
  };

  const formatAddress = address => {
    const formatted_address = `${address?.house_no} ${address?.street1}, ${address?.city}, ${address?.state},  ${address?.country}`;
    return formatted_address;
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          location => {
            setDriverLocation({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            });
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    loadData();
  }, [userId]);

  useEffect(() => {
    getOrder(id);
  }, [id]);

  useEffect(() => {
    if (!driverLocation) {
      return;
    }
    // DataStore.save(Courier.copyOf(databaseCourier, updated => {
    //   updated.latitude = driverLocation.latitude;
    //   updated.longitude = driverLocation.longitude;
    // }));
  }, [driverLocation]);

  useEffect(() => {
    getLocation();
  }, []);

  const restaurantLocation = {
    latitude: order?.restaurant?.user?.address_data?.latitude,
    longitude: order?.restaurant?.user?.address_data?.longitude,
  };

  const userLocation = {
    latitude: order?.user?.address_data?.latitude || 0,
    longitude: order?.user?.address_data?.longitude || 0,
  };

  if (!order || !driverLocation) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <MapView
          ref={mapRef}
          style={{width: width, height: height}}
          initialRegion={{
            latitude: driverLocation?.latitude,
            longitude: driverLocation?.longitude,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
          }}
          showsUserLocation
          followsUserLocation>
          <MapViewDirections
            origin={driverLocation}
            destination={
              order.status === OrderStatuses.ACCEPTED
                ? restaurantLocation
                : userLocation
            }
            waypoints={
              order.status === OrderStatuses.READY_FOR_PICKUP
                ? [restaurantLocation]
                : []
            }
            strokeWidth={10}
            strokeColor="#3fc060"
            apikey={MAP_DIRECTIONS_API_KEY}
            onReady={result => {
              result.distance <= 0.1 && setDriverClose(result.distance <= 0.1);
              setDuration(result.duration);
              setDistance(result.distance);
            }}
          />
          <Marker
            title={order?.restaurant?.name}
            description={order?.restaurant?.name}
            coordinate={{
              latitude: order?.restaurant?.user?.address_data?.latitude || 0,
              longitude: order?.restaurant?.user?.address_data?.longitude || 0,
            }}>
            <View
              style={{
                backgroundColor: 'green',
                padding: 5,
                borderRadius: 25,
              }}>
              <MaterialIcons name="restaurant" size={30} color="white" />
            </View>
          </Marker>

          <Marker
            title={`${order?.user?.profile_data?.first_name} ${order?.user?.profile_data?.last_name}`}
            description={formatAddress(order?.user?.address_data)}
            coordinate={userLocation}>
            <View
              style={{
                backgroundColor: 'green',
                padding: 5,
                borderRadius: 25,
              }}>
              <Entypo name="shop" size={20} color="white" />
            </View>
          </Marker>
        </MapView>

        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          style={styles.bottomSheet}
          handleIndicatorStyle={{backgroundColor: 'lightgrey', width: 80}}>
          <View style={styles.row}>
            <Text style={styles.text}>{duration.toFixed(0)} min</Text>
            <FontAwesome5
              name="shopping-bag"
              size={30}
              color={'#3fc060'}
              style={{marginHorizontal: 10}}
            />
            <Text style={styles.text}>{distance.toFixed(2)} km</Text>
          </View>

          <View>
            <Text style={styles.name}>{order?.restaurant?.name}</Text>
            <View style={styles.secondRow}>
              <Fontisto
                name="shopping-store"
                size={22}
                color={'grey'}
                style={{marginRight: 5, marginTop: 7}}
              />
              <Text style={styles.secondRowText}>
                {formatAddress(order?.restaurant?.user?.address_data)}
              </Text>
            </View>
            <View style={styles.secondRow}>
              <FontAwesome5
                name="map-marker-alt"
                size={22}
                color={'grey'}
                style={{marginRight: 10, marginTop: 5}}
              />
              <Text style={styles.secondRowText}>
                {formatAddress(order?.user?.address_data)}
              </Text>
            </View>
            <View style={styles.thirdRow}>
              <Text style={styles.orderItemsHeading}>Items in this order</Text>

              {order.order_dishes?.map(dish => (
                <View style={styles.orderItem} key={dish.id}>
                  <Text style={styles.orderItemText}>{dish.dish.name}</Text>
                  <Text style={styles.orderItemText}>x{dish.quantity}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              style={{
                // backgroundColor: disableButton() ? 'grey' : '#3fc060',
                backgroundColor: '#3fc060',
                borderRadius: 10,
              }}
              onPress={onPress}
              // disabled={disableButton()}
            >
              <Text style={styles.buttonText}>{renderButtonTitle()}</Text>
            </Pressable>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default OrderDeliveryScreen;
