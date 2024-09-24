import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Feed() {
  const handleRefresh = () => {
    Alert.alert("Sucesso", "Feed atualizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text>Feed</Text>
      </ScrollView>

      <View style={styles.footer}>
        <View></View>
        <TouchableOpacity style={styles.button} onPress={handleRefresh}>
          <Feather name="refresh-ccw" size={24} color="white" />
          <Text style={styles.buttonText}>Atualizar Feed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2F80ED",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    marginLeft: 10,
  },
});
