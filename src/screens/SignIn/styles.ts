import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    margin-top: ${RFValue(-40)}px;
    padding: ${RFValue(50)}px;
`;

export const Image = styled.View`
    width: 100%;
    height: ${RFValue(360)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    font-size: ${RFValue(40)}px;
    margin-bottom: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.title700};
    line-height: ${RFValue(40)}px;
`;

export const Subtitle = styled.Text`
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(15)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.title500};
    line-height: ${RFValue(25)}px;
`;

export const SubtitleButton = styled.Text`
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(15)}px;
    text-align: right;
    font-family: ${({ theme }) => theme.fonts.title500};
    line-height: ${RFValue(25)}px;
`;

export const ButtonLoading = styled.ActivityIndicator`
    color: ${({ theme }) => theme.colors.heading};
`;

export const ButtonContainer = styled.View`
    width: 50%;
`;

export const Separetor = styled.View`
    height: ${RFValue(50)}px;
`;