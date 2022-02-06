import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TitleProps {
    selected: boolean;
}

export const Container = styled.View`
    height: 5%;
    margin-left: 5px;
`;

export const List = styled.FlatList.attrs(
    props => ({
        horizontal: true,
        showsHorizontalScrollIndicator: false
    })
)`
`;

export const Title = styled.Text<TitleProps>`
    color: ${({selected, theme}) => selected ? theme.colors.background_primary : theme.colors.background_secondary};
    font-size: ${RFValue(15)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.title700};
    align-self: center;
`;

export const Item = styled.TouchableWithoutFeedback`
`;

export const SeparatorList = styled.View`
    border-width: 0.6px;
    margin-left: 5px
    margin-right: 5px
    border-color: ${({ theme }) => theme.colors.background_secondary};
`;