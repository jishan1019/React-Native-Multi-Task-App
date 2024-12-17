import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

export default function Component() {
  const item = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      {/* KeyboardAvoidingView to avoid keyboard overlapping */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Different behavior for iOS and Android
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.profile}>
            <Text style={styles.profileText}>
              {" "}
              {item?.data ? item?.data : "Anna Avetisyan"}
            </Text>

            <Image
              source={{ uri: "https://i.ibb.co.com/HTxP7HB/image.png" }}
              style={styles.profileImg}
            />
          </View>

          {/* Input container */}
          <View>
            <View style={styles.inputContainer}>
              <MaterialIcons name="manage-accounts" size={24} color="black" />
              <TextInput placeholder="Enter your name" inputMode="text" />
            </View>

            <View style={styles.inputContainer}>
              <MaterialIcons name="manage-accounts" size={24} color="black" />
              <TextInput placeholder="Enter your email" inputMode="email" />
            </View>

            <View style={styles.inputContainer}>
              <MaterialIcons name="manage-accounts" size={24} color="black" />
              <TextInput placeholder="Enter your phone" inputMode="text" />
            </View>

            <View style={styles.inputContainer}>
              <MaterialIcons name="manage-accounts" size={24} color="black" />
              <TextInput placeholder="Enter your birthday" inputMode="text" />
            </View>

            <View style={styles.inputContainer}>
              <MaterialIcons name="manage-accounts" size={24} color="black" />
              <TextInput
                placeholder="Enter your password"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  profile: {
    backgroundColor: "green",
    width: "100%",
    height: 180,
    padding: 10,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },

  profileText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 10,
  },

  profileImg: {
    width: 130,
    height: 130,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 10,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
  },

  btn: {
    backgroundColor: "#4CAF50", // Background color
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 5, // Rounded corners
    alignItems: "center", // Center the text
  },
  btnText: {
    color: "#fff", // White text
    fontSize: 16, // Font size
    fontWeight: "bold", // Bold text
  },
});
