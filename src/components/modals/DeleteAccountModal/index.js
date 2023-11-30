import React from 'react';
import { Image, Modal, Pressable, StatusBar, Text, View } from 'react-native';
import styles from './styles';

const DeleteAccountModal = ({modalVisible, close, deleteAccount}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        close();
      }}>
      <StatusBar
        backgroundColor="rgba(52, 52, 52, 0.7)"
        barStyle="dark-content"
      />
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to delete your account?
            </Text>
            <Pressable
              style={[styles.button]}
              onPress={() => {
                logout();
              }}>
              <Text style={styles.textStyle}>Yes, delete my account</Text>
            </Pressable>
            <Pressable
              style={[styles.button2]}
              onPress={() => {
                close();
              }}>
              <Text style={styles.textStyle2}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteAccountModal;
