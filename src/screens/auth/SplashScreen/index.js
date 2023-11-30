import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { AppRoutes } from "../../../constants/app_routes";
import styles from "./styles";

function SplashScreen() {
  const navigation = useNavigation();

  return (
    <Onboarding
      onSkip={() => navigation.replace(AppRoutes.Login)}
      onDone={() => navigation.replace(AppRoutes.Login)}
      bottomBarHighlight={false}
      imageContainerStyles={styles.image}
      pages={[
        {
          backgroundColor: '#928DAB',
          image: (
            <Image
              source={require('../../../assets/images/delivery-bike.png')}
            />
          ),
          title: 'MAKE A BOOKING WITHIN MINUTES',
          subtitle:
            'Place an order and get matched with a rider in few minutes',
          titleStyles: {color: '#F3F3F3', fontWeight: 'bold', fontSize: 20},
          subTitleStyles: {color: '#F3F3F3', fontSize: 15},
        },
        {
          backgroundColor: '#FF7171',
          image: (
            <Image
              source={require('../../../assets/images/track-delivery.png')}
            />
          ),
          title: 'TRACK YOUR RIDE AND DELIVERY ORDERS',
          subtitle: 'Actively track your ride and deliveries',
          titleStyles: {color: '#FFF', fontWeight: 'bold', fontSize: 20},
          subTitleStyles: {color: '#FFF', fontSize: 15},
        },
        {
          backgroundColor: '#F3F3F3',
          image: (
            <Image source={require('../../../assets/images/make-money.png')} />
          ),
          title: 'EARN EXTRA INCOME',
          subtitle:
            'Register on the GoNow Rider app now and make money on your own schedule',
          titleStyles: {color: '#666', fontWeight: 'bold', fontSize: 20},
          subTitleStyles: {color: '#666', fontSize: 15},
        },
      ]}
    />
  );
}

export default SplashScreen;
