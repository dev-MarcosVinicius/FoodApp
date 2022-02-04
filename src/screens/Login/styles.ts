import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { Input } from "../../components/Input";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.View`
    align-items: center;
    background-color: "rgba(0,0,0,0.2)";
    border-radius: 10px;
    width: 90%;
    height: 50%;
    opacity: 1;
    padding: 10px;
`;

export const Fields = styled.View`
    flex: 1;
`;

export const InputForm = styled(Input)`
    flex: 1;
`;