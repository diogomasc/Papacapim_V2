import styled from "styled-components/native";

export const UserContainer = styled.View`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const UserIconContainer_Left = styled.View`
  padding: 5px;
  margin-right: 12px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const UserInfoContainer_Right = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const UserInfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const ModalInfo = styled.Text`
  font-size: 14px;
  color: #777;
`;

export const UserTextName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
`;

export const UserTextLogin = styled.Text`
  font-size: 14px;
  color: #555;
`;
