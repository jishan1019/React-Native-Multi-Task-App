import { View, Text, StyleSheet } from "react-native";

export default function RateTab() {
  return (
    <View style={styles.container}>
      <Text>Tab Rate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
