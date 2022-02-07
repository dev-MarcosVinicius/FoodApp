import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

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
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(15)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.text500};
    margin-top: ${RFValue(10)}px;
`;

export const Item = styled.TouchableOpacity``;

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
    justify-content: space-between;
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

export const Fields = styled.View`
    flex: 1;
    margin-right: ${RFValue(10)}px;
`;

export const SuperiorFields = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Price = styled.Text`
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(18)}px;
    text-align: right;
    font-family: ${({ theme }) => theme.fonts.text500};
    margin-top: ${RFValue(20)}px;
`;

export const PriceField = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

export const IconPrice = styled(Feather).attrs(
    props => ({
        name: 'dollar-sign',
        size: 20
    })
)`
    margin-top: ${RFValue(22)}px;
    color: ${({theme}) => theme.colors.on};
`;

export const MiddleFields = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const SubTitle = styled.Text`
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(12)}px;
    text-align: left;
    font-family: ${({ theme }) => theme.fonts.text400};
    margin-top: ${RFValue(10)}px;
`;

export const InferiorFields = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;