import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import axios from 'axios';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
  useWindowDimensions
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Loading from '../../../components/Loading';
import Order from '../../../components/Order';
import { AppRoutes } from '../../../constants/app_routes';
import { BASE_URL } from '../../../utils/config';
import { ORDER_STATUSES } from '../../../utils/order_status';
import styles from './styles';
import profilepic from '../../../assets/images/profile-pic.jpg';

const HomeScreen = ({navigation}) => {
  const [orders, setOrders] = useState([]);
  const {openDrawer} = navigation;
  const bottomSheetRef = useRef(null);
  const [mapRef, setMapRef] = useState(null);
  const snapPoints = useMemo(() => ['12%', '95%'], []);
  const {width, height} = useWindowDimensions();

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/orders/courier?status=${ORDER_STATUSES.READY_FOR_PICKUP}`,
      );
      setOrders(response.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [orders]);

  

  if (!orders) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {/* Map */}
          <MapView
            ref={ref => setMapRef(ref)}
            style={{width: width, height: height, position: 'relative'}}
            showsUserLocation
            followsUserLocation>
            {orders?.map(order => (
              <Marker
                key={order.id}
                title={order.restaurant.name}
                description={order.restaurant.name}
                coordinate={{
                  latitude: order.restaurant.user.address_data.latitude,
                  longitude: order.restaurant.user.address_data.longitude,
                  latitudeDelta: 0.07,
                  longitudeDelta: 0.07,
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
            ))}
          </MapView>

          {/* Header */}
          <View style={styles.homeHeader}>
            <Pressable onPress={openDrawer} style={styles.menu_button}>
              <SimpleLineIcons name={'menu'} color="#000000" size={18} />
            </Pressable>
            <Pressable onPress={() => navigate(AppRoutes.ProfileScreen)}>
              <Image source={profilepic} style={styles.profile__pic} />
            </Pressable>
          </View>
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          // index={0.5}
          style={styles.bottomSheet}
          handleIndicatorStyle={{backgroundColor: 'lightgrey', width: 80}}>
          <View style={styles.bottomContainer}>
            <Text style={styles.heading}>You're Online</Text>
            <Text style={styles.info}>Available Orders: {orders.length}</Text>
          </View>

          <BottomSheetFlatList
            data={orders}
            renderItem={({item}) => (
              <Order
                order={item}
                onPress={() =>
                  navigation.navigate(AppRoutes.OrderDelivery, {id: item.id})
                }
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;
