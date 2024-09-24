import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;

export const Icon = styled(Feather)`
  margin-right: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #555;
  flex: 1;
`;

export const InfoText = styled.Text`
  font-size: 12px;
  color: red;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-color: #ccc;
  border-width: 1px;
  padding-horizontal: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #2f80ed;
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  margin-left: 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 10px;
`;
