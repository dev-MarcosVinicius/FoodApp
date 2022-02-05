import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    font-size: ${RFValue(40)}px;
    margin-top: ${RFValue(50)}px;
    font-family: ${({ theme }) => theme.fonts.title700};
    line-height: ${RFValue(40)}px;
`;