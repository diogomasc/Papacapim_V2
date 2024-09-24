import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function NewPost() {
  const [postMessage, setPostMessage] = useState("");

  const handlePublish = () => {
    Alert.alert("Publicado", "Postagem publicada com sucesso.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather style={styles.icon} name="edit" size={24} color="#2F80ED" />
        <Text style={styles.description}>
          O que deseja compartilha hoje? Faça sua postagem logo abaixo!
        </Text>
      </View>

      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="O que está acontecendo?"
        value={postMessage}
        onChangeText={setPostMessage}
      />
      <View style={styles.footer}>
        <Text style={styles.charCount}>{postMessage.length} caracteres</Text>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                postMessage.trim().length > 0 ? "#2F80ED" : "#9E9E9E",
            },
          ]}
          onPress={handlePublish}
          disabled={postMessage.trim().length === 0}
        >
          <Feather name="send" size={24} color="#fff" />
          <Text style={styles.buttonText}>Enviar</Text>
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
  header: {
    flexDirection: "row",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
  input: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: "top",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  charCount: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
  },
});
