import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    width: 100%;
`;