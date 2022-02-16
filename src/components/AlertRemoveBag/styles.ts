import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerNotify = styled.View``;

export const Modal = styled.Modal``;

export const ModalView = styled.View`
    height: 20%;
    top: 80%;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.overlay_grey};
    flex-direction: column;
    justify-content: space-between;
`;

export const Description = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.text500};
    margin-top: ${RFValue(40)}px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
`;