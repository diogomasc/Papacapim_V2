import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";

const FollowersModal = ({ visible, onClose, userLogin }) => {
  const [followers, setFollowers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (visible) {
      fetchFollowers(userLogin);
    }
  }, [visible, userLogin]);

  const fetchFollowers = async (login) => {
    setIsLoading(true);
    try {
      const response = await api.get(`/users/${login}/followers`);
      console.log("Dados de seguidores de", login, ":", response.data);
      const followersData = response.data;

      const detailedFollowers = await Promise.all(
        followersData.map(async (follower) => {
          try {
            const userResponse = await api.get(
              `/users/${follower.follower_login}`
            );
            return {
              ...follower,
              name: userResponse.data.name,
            };
          } catch (error) {
            console.error(
              `Erro ao buscar detalhes do usuário ${follower.follower_login}:`,
              error
            );
            return {
              ...follower,
              name: "Nome não disponível",
            };
          }
        })
      );

      setFollowers(detailedFollowers);
    } catch (error) {
      console.error("Erro ao buscar seguidores:", error);
      Alert.alert("Erro", "Não foi possível carregar os seguidores.");
      setFollowers([]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderFollowerItem = ({ item }) => (
    <View style={styles.followerItem}>
      <Feather
        name="user"
        size={24}
        color="#2F80ED"
        style={styles.followerIcon}
      />
      <View style={styles.followerInfo}>
        <Text style={styles.followerName}>{item.name}</Text>
        <Text style={styles.followerLogin}>@{item.follower_login}</Text>
      </View>
    </View>
  );

  const getFollowerKey = (item) => `follower-${item.follower_id}`;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Seguidores</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Feather name="x" size={24} color="#2F80ED" />
            </TouchableOpacity>
          </View>
          {isLoading ? (
            <ActivityIndicator size="large" color="#2F80ED" />
          ) : followers.length > 0 ? (
            <FlatList
              data={followers}
              renderItem={renderFollowerItem}
              keyExtractor={getFollowerKey}
              style={styles.followersList}
            />
          ) : (
            <Text style={styles.noFollowersText}>
              Nenhum seguidor encontrado.
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  followersList: {
    marginTop: 10,
  },
  followerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
  },
  followerIcon: {
    marginRight: 10,
  },
  followerInfo: {
    flex: 1,
  },
  followerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  followerLogin: {
    fontSize: 14,
    color: "#666",
  },
  noFollowersText: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginTop: 20,
  },
});

export default FollowersModal;
