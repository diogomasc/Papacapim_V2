import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-height: 80%;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const FollowersList = styled.FlatList`
  margin-top: 10px;
`;

export const FollowerItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #d3d3d3;
`;

export const FollowerIcon = styled.View`
  margin-right: 10px;
`;

export const FollowerInfo = styled.View`
  flex: 1;
`;

export const FollowerName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const FollowerLogin = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const NoFollowersText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #666;
  margin-top: 20px;
`;
