import React from "react";

import { Container } from "./styles";
import theme from "../../global/styles/theme";
import { ChildrenProps } from '../../shared/types/children.type';

export function Background({ children }: ChildrenProps) {

    const { background_secondary, background_primary } = theme.colors;

    return (
        <Container
            colors={[background_secondary, background_primary]}
        >
            {children}
        </Container>
    );
}