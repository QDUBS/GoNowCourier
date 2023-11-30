import {faAlignRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ABOUT,
  CHECKUPDATES,
  DATAPROTECTIONPOLICY,
  FAQ,
  PASSWORDRESET,
  SUPPORT,
  TERMSCONDITIONS,
} from '../../../constants/route_names';
import Option from '../../../components/common/Option';
import styles from './styles';

function SettingsScreen() {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.options__container}>
            <Option
              text={'Reset Password'}
              icon={faAlignRight}
              onPress={() => navigate(PASSWORDRESET)}
            />

            <Option
              text={'About Us'}
              icon={faAlignRight}
              onPress={() => navigate(ABOUT)}
            />

            <Option
              text={'FAQ'}
              icon={faAlignRight}
              onPress={() => navigate(FAQ)}
            />

            <Option
              text={'Support'}
              icon={faAlignRight}
              onPress={() => navigate(SUPPORT)}
            />

            <Option
              text={'Terms & Conditions'}
              icon={faAlignRight}
              onPress={() => navigate(TERMSCONDITIONS)}
            />

            <Option
              text={'Data Protection Policy'}
              icon={faAlignRight}
              onPress={() => navigate(DATAPROTECTIONPOLICY)}
            />

            <Option
              text={'Check for Updates'}
              icon={faAlignRight}
              onPress={() => navigate(CHECKUPDATES)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SettingsScreen;
