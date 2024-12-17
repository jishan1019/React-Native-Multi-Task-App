import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [data, setData] = useState("");

  return (
    <View style={styles.container}>
      <Text>Count : {count}</Text>

      <Button
        title="Add"
        onPress={() => setCount((prevCount) => prevCount + 1)}
      />
      <Button
        title="Remove"
        onPress={() => setCount((prevCount) => prevCount - 1)}
      />

      <Text>Data : {data}</Text>

      <TextInput
        onChangeText={setData}
        placeholder="Enter Text Here"
        inputMode="text"
      />

      <TouchableOpacity
        style={{ backgroundColor: "green", padding: 10 }}
        onPress={() =>
          router.push({ pathname: "/component", params: { data } })
        }
      >
        <Text style={{ textAlign: "center", color: "white" }}>
          Go To Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    gap: 20,
  },
});
