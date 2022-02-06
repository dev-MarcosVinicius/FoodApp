import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TitleProps {
    selected: boolean;
}

export const Container = styled.View`
    height: 5%;
`;

export const List = styled.FlatList.attrs(
    props => ({
        horizontal: true,
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
    border-width: 0.6px;
    border-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Content = styled.View<TitleProps>`
    background-color: ${({selected, theme}) => selected ? theme.colors.heading : theme.colors.shape};
    padding-left: 5px
    padding-right: 5px    
`;