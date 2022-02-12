import React from 'react';

import { 
    Container,
    Title,
    IconNext,
    Content
} from './styles';
import { ButtonProps } from '../../shared/types/button.type';

export function BagButton({ title, totalPrice, ...rest }: ButtonProps) {
    return (
        <Container
            {...rest}
        >
            <Title>
                R$ {totalPrice}
            </Title>

            <Content>
                <Title>
                    {title}
                </Title>
                <IconNext/>
            </Content>
        </Container>
    )
}
