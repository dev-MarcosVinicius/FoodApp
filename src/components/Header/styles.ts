import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background_secondary};
    width: 100%;
    height: ${RFValue(90)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: ${RFValue(15)}px;
    padding-left: ${RFValue(19)}px;
    padding-right: ${RFValue(19)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.text500};
    font-size: ${RFValue(18)}px;
`;

export const Content = styled.View`
    width: ${RFValue(24)}px;
`;