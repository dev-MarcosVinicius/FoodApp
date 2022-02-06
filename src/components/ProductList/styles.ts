import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TitleProps {
    selected: boolean;
}

export const Container = styled.View`
    margin-top:  ${RFValue(8)}px;
`;

export const List = styled.FlatList.attrs(
    props => ({
        showsHorizontalScrollIndicator: false
    })
)`
    margin-bottom: ${RFValue(32)}px;
`;

export const Title = styled.Text<TitleProps>`
    color: ${({selected, theme}) => selected ? theme.colors.background_primary : theme.colors.background_secondary};
    font-size: ${RFValue(15)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.title700};
    margin-top: ${RFValue(10)}px;
`;

export const Item = styled.TouchableWithoutFeedback``;

export const SeparatorList = styled.View`
    border-width: ${RFValue(2)}px;
    border-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Content = styled.View<TitleProps>`
    background-color: ${({theme}) => theme.colors.shape};
    margin-left: ${RFValue(5)}px;
    margin-right: ${RFValue(5)}px;
    height: ${RFValue(120)}px;
    border-radius:  ${RFValue(8)}px;
    flex-direction: row;
`;

export const ImageProduct = styled.ImageBackground.attrs(
    props => ({
        borderRadius: 8
    })
)`
    align-self: center;
    height:  ${RFValue(100)}px;
    width:  ${RFValue(100)}px;
    margin-left: ${RFValue(10)}px;
    margin-right: ${RFValue(10)}px;
    border-radius:  ${RFValue(8)}px;
`;