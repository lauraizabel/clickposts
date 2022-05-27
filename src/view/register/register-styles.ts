import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  height: 92%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const FormContent = styled.View`
  width: 90%;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  position: absolute;
  bottom: 0;
  margin-top: 20px;
`;

export const ContainerRegisterButton = styled.View`
  width: 40%;
`;
export const ContainerCancelButton = styled.View`
  width: 40%;
`;
