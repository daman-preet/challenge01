import styled from 'styled-components/native';

export const MainView = styled.View`
  flex: 1;
`;

// Style for Profile Info View
export const ProfileInfoView = styled.TouchableOpacity`
  flex-direction: column;
  width: 100%;
  padding: 50px 30px;
  flex: 1;
  align-items: center;
`;

// Style for Profile Detail View
export const ProfileDetailView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

//Style for Menu List View
export const MenuListView = styled.View`
  flex: 1;
  padding-top: 16px;
  padding-left: 30px;
`;

// Style for List Item Row Container
export const MenuRowContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
`;

// Style for Menu Option Name View
export const MenuOptionNameView = styled.View`
  flex-direction: column;
  flex: 1;
  padding-left: 30px;
`;

// Style for App version view
export const AppVersionView = styled.View`
  bottom: 0;
  padding: 10px 0px 15px;
  padding-left: 30px;
`;

export const TextView = styled.Text`
  font-size: 20px;
`;

export const DetailView = styled.View`
  margin-top: 15px;
`;

export const LogoutView = styled.Pressable`
  border-radius: 30px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;
