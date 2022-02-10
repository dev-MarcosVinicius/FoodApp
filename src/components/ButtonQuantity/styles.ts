import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const SectionQuantity = styled.View`
    width: 30%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${RFValue(8)}px;
    margin: ${RFValue(6)}px;
    border-width: 1.5px;
    border-color: ${({ theme }) => theme.colors.heading};
    border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.background_secondary};
    border-radius: 5px;
    padding: ${RFValue(18)}px;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text500};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const IconMinus = styled(Feather).attrs(
    props => ({
        name: "minus",
        size: 24,
    })
)`
    color: ${({ disabled, theme }) => disabled ? theme.colors.heading : theme.colors.background_secondary};
`;

export const IconPlus = styled(Feather).attrs(
    props => ({
        name: "plus",
        size: 24
    })
)`
    color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Quantity = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text500};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Action = styled.TouchableOpacity``;