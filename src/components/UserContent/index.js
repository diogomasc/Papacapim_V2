import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  UserContainer,
  UserIconContainer_Left,
  UserInfoContainer_Right,
  UserInfoRow,
  ModalInfo,
  UserTextName,
  UserTextLogin,
} from "./styles";

const UserContent = ({ userData, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <UserContainer>
        <UserIconContainer_Left>
          <Feather name="user" size={24} color="#2F80ED" />
        </UserIconContainer_Left>
        <UserInfoContainer_Right>
          <UserInfoRow>
            <UserTextName>{userData.name}</UserTextName>
            <UserTextLogin>@{userData.login}</UserTextLogin>
          </UserInfoRow>
          <ModalInfo>
            Usuário desde:{" "}
            {new Date(userData.created_at).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </ModalInfo>
        </UserInfoContainer_Right>
      </UserContainer>
    </TouchableOpacity>
  );
};

export default UserContent;
