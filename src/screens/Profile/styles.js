import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 40px;
  background-color: #fff;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #555;
  margin-bottom: 5px;
`;

export const Info = styled.Text`
  font-size: 16px;
`;

export const FollowButton = styled.TouchableOpacity`
  background-color: ${(props) => (props.isFollowing ? "#E74C3C" : "#2F80ED")};
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;

export const FollowButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const FollowersContainer = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
`;

export const FollowersInfo = styled.Text`
  font-size: 16px;
`;

export const FollowersLink = styled.Text`
  color: #2f80ed;
  margin-top: 5px;
`;
