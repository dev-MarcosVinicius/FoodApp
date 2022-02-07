import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    width: 100%;
    height: 60%;
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
    height: 40%;
    width: 93%;
`;

export const Section = styled.View`
    height: 20%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;