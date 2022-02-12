import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import FadeInFlatList from "../FadeInFlatList";

interface TitleProps {
    selected: boolean;
}

export const Container = styled.View``;

export const List = styled(FadeInFlatList).attrs(
    props => ({
        showsHorizontalScrollIndicator: false
    })
)`
    margin-bottom: ${RFValue(32)}px;
`;

export const Title = styled.Text<TitleProps>`
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.text500};
    margin-top: ${RFValue(10)}px;
`;

export const Item = styled.TouchableOpacity.attrs(
    props => ({
        activeOpacity: 0.7
    })
)``;

export const SeparatorList = styled.View`
    border-width: 0.6px;
    border-color: ${({ theme }) => theme.colors.heading};
`;

export const Content = styled.View<TitleProps>`
    background-color: ${({theme}) => theme.colors.shape};
    margin-left: ${RFValue(5)}px;
    margin-right: ${RFValue(5)}px;
    height: ${RFValue(70)}px;
    border-radius:  ${RFValue(8)}px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Fields = styled.View`
    flex: 1;
    margin-left: ${RFValue(10)}px;
`;

export const SuperiorFields = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Price = styled.Text`
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.text500};
    margin-top: ${RFValue(16)}px;
`;

export const PriceField = styled.View`
    flex-direction: row;
`;

export const InferiorFields = styled.View`
    flex-direction: row;
    justify-content: flex-start;
`;