import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import styled from "styled-components/native";

const ShapeColor = ({ theme }) => theme.colors.shape;

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    width: 100%;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.background};
    font-size: ${RFValue(16)}px;
    text-align: left;
    font-family: ${({ theme }) => theme.fonts.title700};
`;

export const ContainerTitle = styled.View`
    flex-direction: row;
    margin-left: 5px;
    margin-top: ${RFValue(10)}px;
    align-items: center;
`;

export const IconProduct = styled(Feather).attrs(
    props => ({
        size: 24,
    })
)`
    color: ${({ theme }) => theme.colors.shape};
    margin-right: 5px;
`;

export const LoadingProduct = styled.ActivityIndicator.attrs(
    props => ({
        size: "large",
        color: "#FFFFFF"
    })
)``;