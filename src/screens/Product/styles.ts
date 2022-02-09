import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    width: 100%;
    height: 100%;
    padding-top: ${RFValue(10)}px;
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.text400};
    line-height: ${RFValue(21)}px;
    padding-left: ${RFValue(4)}%;
    padding-right: ${RFValue(4)}%;
`;

export const ImageProduct = styled.ImageBackground.attrs(
    props => ({
        borderRadius: 8
    })
)`
    align-self: center;
    height: 30%;
    width: 93%;
`;

export const Section = styled.View`
    height: 30%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UnitPrice = styled.Text`
    padding-left: ${RFValue(4)}%;
    width: ${RFValue(90)}px;
`;

export const TotalPrice = styled.Text`
    padding-right: ${RFValue(4)}%;
`;