import React from "react";

import { Container } from "./styles";
import theme from "../../global/styles/theme";
import { ChildrenProps } from '../../shared/types/children.type';

export function Background({ children }: ChildrenProps) {

    const { secondary, primary } = theme.colors;

    return (
        <Container
            colors={[secondary, primary]}
        >
            {children}
        </Container>
    );
}