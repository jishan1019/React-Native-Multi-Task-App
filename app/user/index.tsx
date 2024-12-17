import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      setUser(data);
    };

    fetchData();
  }, []);

  const Item = ({ data }: any) => (
    <View style={styles.item}>
      <Text>{data?.id}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>{data?.title}</Text>
      <Text>{data?.body}</Text>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={user}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item: any) => item.id.toString()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  item: {
    padding: 10,
    backgroundColor: "green",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});
