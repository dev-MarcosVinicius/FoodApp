import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TitleProps {
    selected: boolean;
}

export const Container = styled.View`
    margin-top: 10px;
`;

export const List = styled.FlatList.attrs(
    props => ({
        showsHorizontalScrollIndicator: false
    })
)``;

export const Title = styled.Text<TitleProps>`
    color: ${({selected, theme}) => selected ? theme.colors.background_primary : theme.colors.background_secondary};
    font-size: ${RFValue(15)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.title700};
    margin-top: ${RFValue(10)}px;
`;

export const Item = styled.TouchableWithoutFeedback``;

export const SeparatorList = styled.View`
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Content = styled.View<TitleProps>`
    background-color: ${({theme}) => theme.colors.shape};
    margin-left: 5px;
    margin-right: 5px;
    height: ${RFValue(120)}px
`;