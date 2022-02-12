import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background_secondary};
    width: 100%;
    height: 10%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: ${RFValue(30)}px;
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

export const PopUpIcon = styled.View`
    height: 8px;
    width: 8px;
    background-color: ${({ theme }) => theme.colors.shape};
    position: absolute;
    border-radius: 5px;
    right: 0px;
`;