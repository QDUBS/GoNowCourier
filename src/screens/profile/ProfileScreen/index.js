import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AppRoutes} from '../../../constants/app_routes';
import styles from './styles';
import LogoutModal from '../../../components/modals/LogoutModal';
import DeleteAccountModal from '../../../components/modals/DeleteAccountModal';
import { useAuthContext } from '../../../context/AuthContext';

function ProfileScreen() {
  const navigation = useNavigation();
  const {logout} = useAuthContext();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const signOut = () => {
    logout();
  };

  const deleteAccount = () => {
    console.log('delete account');
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerFlex}>
              <Pressable onPress={() => navigation.goBack()}>
                <MaterialIcons
                  name="keyboard-backspace"
                  size={28}
                  color={'black'}
                />
              </Pressable>
              <Text style={styles.headerText}>Profile</Text>
            </View>
            <Pressable
              onPress={() => navigation.navigate(AppRoutes.EditProfileScreen)}>
              <Text style={styles.headerButton}>Edit Profile</Text>
            </Pressable>
          </View>

          <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
            {/* First section */}
            <View style={styles.firstSection}>
              <Image
                source={require('../../../assets/images/profile-pic.jpg')}
                style={styles.profile__image}
              />
              <View>
                <Text style={styles.name}>Confidence Isaiah</Text>
                <Text style={styles.number}>+2349034107411</Text>
              </View>
              <View style={styles.ratingContainer}>
                <FontAwesomeIcon icon={faStar} color={'#a1705a'} size={15} />
                <Text style={styles.rating}>5.0</Text>
                <Text style={styles.ratingText}>Rating</Text>
              </View>
              <View style={styles.emailContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons
                    name="mail-outline"
                    size={20}
                    color={'black'}
                  />
                  <Text style={styles.email}>qdubsmusk@gmail.com</Text>
                </View>
                <Pressable onPress={() => {}} style={styles.verifyButton}>
                  <Text style={styles.verifyText}>VERIFY</Text>
                </Pressable>
              </View>
            </View>

            {/* Saved Locations */}
            <View style={styles.savedLocations}>
              <Text style={styles.savedLocationsHeading}>Saved places</Text>
              <Pressable
                style={styles.savedLocation}
                onPress={() =>
                  navigation.navigate(AppRoutes.UpdateLocationScreen)
                }>
                <SimpleLineIcons name="home" size={20} color={'black'} />
                <Text style={styles.email}>Enter home location</Text>
              </Pressable>
              <Pressable
                style={styles.savedLocation}
                onPress={() =>
                  navigation.navigate(AppRoutes.UpdateLocationScreen)
                }>
                <MaterialIcons name="work-outline" size={20} color={'black'} />
                <Text style={styles.email}>Enter work location</Text>
              </Pressable>
              <Pressable
                style={styles.savedLocation2}
                onPress={() =>
                  navigation.navigate(AppRoutes.UpdateLocationScreen)
                }>
                <Ionicons name="add-outline" size={20} color={'black'} />
                <Text style={styles.email}>Add a place</Text>
              </Pressable>
            </View>

            {/* Preferred language */}
            <View style={styles.savedLocations}>
              {/* 
              <View style={styles.savedLocation}>
                <Text style={styles.languageHeading}>Language</Text>
                <Text style={styles.language}>English - US</Text>
              </View>  
              */}
              <Pressable
                style={styles.savedLocation}
                onPress={() => setLogoutModalVisible(true)}>
                <MaterialIcons name="logout" size={20} color={'black'} />
                <Text style={styles.email}>Log out</Text>
              </Pressable>
              <Pressable
                style={[styles.savedLocation2, {paddingBottom: '20%'}]}
                onPress={() => setDeleteModalVisible(true)}>
                <AntDesign name="delete" size={20} color={'black'} />
                <Text style={styles.email}>Delete account</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>

      <LogoutModal
        modalVisible={logoutModalVisible}
        close={() => setLogoutModalVisible(false)}
        logout={signOut}
      />
      <DeleteAccountModal
        modalVisible={deleteModalVisible}
        close={() => setDeleteModalVisible(false)}
        deleteAccount={deleteAccount}
      />
    </SafeAreaView>
  );
}

export default ProfileScreen;
