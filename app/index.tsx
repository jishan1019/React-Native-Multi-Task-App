import { Link } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import cover from "../assets/images/cover.jpg";
import bgImg from "../assets/images/motibg.jpg";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={cover} style={{ width: "100%", height: 200 }} />

      <ImageBackground source={bgImg} style={styles.imgBg} resizeMode="cover">
        <View style={styles.gridView}>
          <View style={styles.gridItem}>
            <MaterialIcons name="home" size={40} color="black" />
            <Link href="/component">Profile</Link>
          </View>

          <View style={styles.gridItem}>
            <MaterialIcons name="star" size={40} color="black" />
            <Link href="/counter">Counter</Link>
          </View>

          <View style={styles.gridItem}>
            <MaterialIcons name="settings" size={40} color="black" />
            <Link href="/user">User</Link>
          </View>

          <View style={styles.gridItem}>
            <MaterialIcons name="home" size={40} color="black" />
            <Link href="/todo">Todo</Link>
          </View>

          <View style={styles.gridItem}>
            <MaterialIcons name="star" size={40} color="black" />
            <Text>Prayer Time</Text>
          </View>

          <View style={styles.gridItem}>
            <MaterialIcons name="settings" size={40} color="black" />
            <Text>Download</Text>
          </View>

          <View style={styles.gridItem}>
            <MaterialIcons name="home" size={40} color="black" />
            <Text>Notification</Text>
          </View>

          <View style={styles.gridItem}>
            <MaterialIcons name="star" size={40} color="black" />
            <Text>About</Text>
          </View>

          <View style={styles.gridItem}>
            <MaterialIcons name="settings" size={40} color="black" />
            <Text>Share App</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            OFF AIR
          </Text>

          <MaterialIcons name="play-circle" size={28} color="white" />

          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            BAYAN SCHEDULE
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  imgBg: {
    width: "100%",
    height: "100%",
    padding: 20,
  },

  gridView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  gridItem: {
    width: "30%",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    marginTop: 10,
    textAlign: "center",
  },

  footer: {
    width: "100%",
    height: 70,
    backgroundColor: "#00733F",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },

  footerItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 5,
  },
});
