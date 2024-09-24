import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem("user");
      const storagedToken = await AsyncStorage.getItem("token");

      console.log("Recuperando dados do AsyncStorage...");
      console.log("Usuário armazenado:", storagedUser);
      console.log("Token armazenado:", storagedToken);

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers["x-session-token"] = storagedToken;
        console.log("Usuário e token configurados com sucesso.");
      } else {
        console.error("Usuário ou token não encontrados.");
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  const signIn = async (login, password) => {
    try {
      const response = await api.post("/sessions", { login, password });
      setUser(response.data);
      api.defaults.headers["x-session-token"] = response.data.token;
      await AsyncStorage.setItem("user", JSON.stringify(response.data));
      await AsyncStorage.setItem("token", response.data.token);
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
    setUser(null);
  };

  const register = async (userData) => {
    try {
      const response = await api.post("/users", { user: userData });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateUser = async (userData) => {
    try {
      const response = await api.patch(`/users/${user.id}`, { user: userData });
      setUser(response.data);
      await AsyncStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete(`/users/${user.id}`);
      await signOut();
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signIn,
        signOut,
        register,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
