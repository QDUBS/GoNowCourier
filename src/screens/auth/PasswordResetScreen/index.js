import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

function PasswordResetScreen() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const confirm = () => {
    console.log("Password changed!!");
  };

  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>

        <View style={styles.content}>
          <View style={styles.options__container}>
            {/* Current Password */}
            <View style={styles.form__input__container}>
              <Text style={styles.form__label}>Current Password</Text>

              <View style={styles.passwordInputContainer}>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    onPress={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? (
                      <FontAwesomeIcon icon={faEye} color="#818181" size={20} />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        color="#818181"
                        size={20}
                      />
                    )}
                  </TouchableOpacity>
                </View>

                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  secureTextEntry={!showCurrentPassword}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </View>
            </View>

            {/* New Password */}
            <View style={styles.form__input__container}>
              <Text style={styles.form__label}>New Password</Text>

              <View style={styles.passwordInputContainer}>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    onPress={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <FontAwesomeIcon icon={faEye} color="#818181" size={20} />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        color="#818181"
                        size={20}
                      />
                    )}
                  </TouchableOpacity>
                </View>

                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  secureTextEntry={!showNewPassword}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </View>
            </View>

            {/* Confirm New Password */}
            <View style={styles.form__input__container}>
              <Text style={styles.form__label}>Confirm Password</Text>

              <View style={styles.passwordInputContainer}>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      setShowConfirmNewPassword(!showConfirmNewPassword)
                    }
                  >
                    {showConfirmNewPassword ? (
                      <FontAwesomeIcon icon={faEye} color="#818181" size={20} />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        color="#818181"
                        size={20}
                      />
                    )}
                  </TouchableOpacity>
                </View>

                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  secureTextEntry={!showConfirmNewPassword}
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.logout__button} onPress={confirm}>
            <Text style={styles.logout__button__text}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PasswordResetScreen;
