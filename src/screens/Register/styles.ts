import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TextInputMask } from 'react-native-masked-text'
import { Input } from '../../components/Input';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.background_secondary};
    width: 100%;
    height: ${RFValue(90)}px;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.text500};
    font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px;
    justify-content: space-between;
`;

export const Fields = styled.ScrollView``;

export const SeparetorBetween = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const SectionLarge = styled.View`
    flex: 1;
`;

export const SectionMedium = styled.View`
    flex: 1;
    justify-content: space-between;
    padding-left: ${RFValue(5)}px;
    padding-right: ${RFValue(5)}px;
`;

export const InputLarge = styled(Input)`
    width: 100%;
`;

export const InputMasked = styled(TextInputMask)`
    width: 100%;
    padding: 16px 18px;
    font-size: ${RFValue(14)}px;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    margin-bottom: 8px;
    font-family: ${({ theme}) => theme.fonts.text400};
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Subtitle = styled.Text`
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: ${RFValue(15)}px;
    text-align: left;
    font-family: ${({ theme }) => theme.fonts.title500};
`;