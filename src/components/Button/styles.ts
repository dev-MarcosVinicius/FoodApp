import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    align-items: center;
    padding: 18px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text500};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.background_secondary};
`;