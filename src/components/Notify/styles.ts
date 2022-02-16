import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerNotify = styled.View``;

export const Modal = styled.Modal``;

export const ModalView = styled.View`
    height: 7%;
    top: 85%;
    margin-left: ${RFValue(5)}px;
    margin-right: ${RFValue(5)}px;
    border-radius: ${RFValue(3)}px;
    background-color: ${({ theme }) => theme.colors.on};
    flex-direction: column;
`;

export const Description = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.text500};
    margin-top: ${RFValue(10)}px;
    text-align: center;
`;