import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    align-items: center;
    padding: 18px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text500};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const IconNext = styled(Feather).attrs(
    props => ({
        name: "chevron-right",
        size: 24,
    })
)`
    color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`;