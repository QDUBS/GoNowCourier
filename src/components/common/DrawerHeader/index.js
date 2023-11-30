import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import {AppRoutes} from '../../../constants/app_routes';

function DrawerHeader(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/profile-pic.jpg')}
              style={styles.profile__image}
            />

            <View>
              <Text style={styles.name}>Confidence Isaiah</Text>
              <Pressable
                onPress={() => navigation.navigate(AppRoutes.Profile)}>
                <Text style={styles.view}>View profile</Text>
              </Pressable>
            </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate(AppRoutes.RatingsScreen)}
            style={styles.ratingContainer}>
            <FontAwesomeIcon icon={faStar} color={'#a1705a'} size={15} />
            <Text style={styles.rating}>5.0</Text>
            <Text style={styles.ratingText}>Rating</Text>
          </Pressable>
        </View>

        <View style={styles.container}>
          <DrawerItemList {...props} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

export default DrawerHeader;
