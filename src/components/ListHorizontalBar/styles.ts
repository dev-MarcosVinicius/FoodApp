import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TitleProps {
    selected: boolean;
}

export const Container = styled.View`
    height: 5%;
    width: 100%;
    flex-direction: row;
    background-color: ${({theme}) => theme.colors.shape};
    justify-content: center;
`;

export const Section = styled.View``;

export const List = styled.FlatList.attrs(
    props => ({
        horizontal: true,
        showsHorizontalScrollIndicator: false
    })
)`
    background-color: ${({theme}) => theme.colors.shape};
    border-top-width: 1px
    border-bottom-width: 1px
    border-color: ${({theme}) => theme.colors.shape};
`;

export const Title = styled.Text<TitleProps>`
    color: ${({selected, theme}) => selected ? theme.colors.background_secondary : theme.colors.text_dark};
    font-size: ${RFValue(15)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.title700};
    margin-top: ${RFValue(10)}px;
`;

export const Item = styled.TouchableWithoutFeedback``;

export const Content = styled.View<TitleProps>`
    background-color: ${({theme}) => theme.colors.shape};
    padding-left: 5px;
    padding-right: 5px;    
`;

export const LoadingCategory = styled.ActivityIndicator.attrs(
    props => ({
        size: "large",
        color: "#FA8072"
    })
)``;