import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

interface TodoItem {
  name: string;
  phone: string;
}

export default function Todo() {
  const [data, setData] = useState<TodoItem>({
    name: "",
    phone: "",
  });

  const [todo, setTodo] = useState<TodoItem[]>([]);

  const handelAddTodo = () => {
    setTodo([...todo, data]);

    setData({
      name: "",
      phone: "",
    });

    ToastAndroid.show("Todo Added", ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        inputMode="text"
        value={data.name}
        onChangeText={(text) => setData((prev) => ({ ...prev, name: text }))}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your phone"
        inputMode="text"
        value={data.phone}
        onChangeText={(text) => setData((prev) => ({ ...prev, phone: text }))}
      />

      <TouchableOpacity style={styles.btn} onPress={() => handelAddTodo()}>
        <Text style={{ textAlign: "center", color: "white" }}>Add Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          router.push({ pathname: "/todo-list", params: { data } })
        }
      >
        <Text style={{ textAlign: "center", color: "white" }}>View Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  input: {
    marginBottom: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 5,
    width: "90%",
    marginTop: 10,
    backgroundColor: "#ebe8e8",
  },

  btn: {
    backgroundColor: "green",
    width: "50%",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
});
