import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    flex: 1;
    padding-top: ${RFValue(10)}px;
`;

export const Footer = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-self: flex-end;
    padding: 20px;
`;