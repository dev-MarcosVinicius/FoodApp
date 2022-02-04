import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { Input } from "../../components/Input";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.View`
    justify-content: space-between;
    background-color: "rgba(0,0,0,0.2)";
    border-radius: 10px;
    width: 90%;
    height: 50%;
    opacity: 1;
    padding: 10px;
`;

export const Fields = styled.View`
    width: 100%;
    margin-top: ${RFValue(-30)}px;
`;

export const InputForm = styled(Input)`
`;

export const Title = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    font-size: ${RFValue(40)}px;
    margin-top: ${RFValue(50)}px;
    font-family: ${({ theme }) => theme.fonts.title700};
    line-height: ${RFValue(40)}px;
`;