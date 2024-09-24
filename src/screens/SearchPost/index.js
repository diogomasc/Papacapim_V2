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
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function SearchPost() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      Alert.alert("Atenção", "Digite o conteúdo da postagem para pesquisar.");
      return;
    }

    setResults([`Buscando por: ${searchQuery}`]);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="message-question-outline"
            size={24}
            color="#2F80ED"
          />
          <Text style={styles.description}>
            Procurando uma postagem? Procure por um trecho de conteúdo da
            postagem e vamos procura-la!
          </Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Digite o conteúdo da postagem..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          multiline
          textAlignVertical="center"
        />

        <View style={styles.resultsContainer}>
          <View style={styles.resultsSearch}>
            {results.map((result, index) => (
              <Text key={index}>{result}</Text>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.count}>
          Contagem de Resultados: {results.length}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Feather name="search" size={24} color="#fff" />
          <Text style={styles.buttonText}>Buscar</Text>
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
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    flexShrink: 1,
  },
  resultsContainer: {
    flex: 1,
  },
  resultsSearch: {
    fontSize: 16,
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  count: {
    fontSize: 16,
    color: "#555",
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
