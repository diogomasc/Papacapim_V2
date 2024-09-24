import React, { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";
import UserContent from "../../components/UserContent";
import api from "../../services/api";
import {
  Container,
  Header,
  Icon,
  Description,
  InfoText,
  Input,
  Button,
  ButtonText,
  Footer,
} from "./styles";

export default function SearchUser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();
  const { user: currentUser } = useAuth();

  if (!currentUser) {
    Alert.alert("Erro", "Usuário atual não disponível. Faça login novamente.");
    console.error("Erro: currentUser não disponível.");
    return null;
  }

  const validateSession = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      Alert.alert("Erro", "Sua sessão expirou. Faça login novamente.");
      return false;
    }
    return true;
  };

  const handleSearch = async () => {
    const sessionValid = await validateSession();
    if (!sessionValid) return;

    if (searchQuery.trim() === "") {
      Alert.alert("Atenção", "Digite um apelido para pesquisar.");
      return;
    }

    try {
      const response = await api.get(`/users/${searchQuery}`);
      const userData = response.data;
      if (userData) {
        setUserData(userData);
      } else {
        Alert.alert(
          "Erro",
          "Usuário não encontrado. Não existe um usuário com este apelido."
        );
      }
    } catch (error) {
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao processar sua solicitação. Verifique o apelido e tente novamente."
      );
      console.error("Erro na busca do usuário:", error);
    }
  };

  const handleOpenProfile = () => {
    if (userData) {
      navigation.navigate("Profile", { userData });
    }
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header>
          <Icon name="users" size={24} color="#2F80ED" />
          <Description>
            Procurando um usuário? Digite o apelido do usuário e vamos
            procurá-lo!
          </Description>
        </Header>

        <InfoText>
          Digite o apelido exato do usuário para obter resultados.
        </InfoText>

        <Input
          placeholder="Digite o apelido..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {userData && (
          <UserContent userData={userData} onPress={handleOpenProfile} />
        )}
      </ScrollView>

      <Footer>
        <View></View>
        <Button onPress={handleSearch}>
          <Feather name="search" size={24} color="#fff" />
          <ButtonText>Buscar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
}
