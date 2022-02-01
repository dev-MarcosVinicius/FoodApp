import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerNotify = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.overlay};
`;

export const ContentNotify = styled.View`
    margin: ${RFValue(20)}px;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    border-radius: ${RFValue(10)}px;
    width: 80%;
    height: 30%;
    align-items: center;
    elevation: 5;
    padding-top: ${RFValue(20)}px;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.title700};
    font-size: ${RFValue(25)}px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    background-color: transparent;
    border-radius: 5px;
    align-items: center;
    padding-bottom: ${RFValue(18)}px;
`;

export const ButtonTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text500};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.text400};
    font-size: ${RFValue(15)}px;
    text-align: center;
`;

export const Separator = styled.View`
    border-color: ${({ theme }) => theme.colors.shape};
    width: 100%;
    border-width: 1px;
`;