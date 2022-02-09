import React from 'react';

import { 
    Button,
    Title,
    Container,
    SectionQuantity,
    IconMinus,
    Quantity,
    IconPlus,
    Action
} from './styles';
import { ButtonQuantityProps } from '../../shared/types/button.type';

export function ButtonQuantity({ title, price, quantity }: ButtonQuantityProps) {
    return (
        <Container>
            <SectionQuantity>
                <Action>
                    <IconMinus/>
                </Action>

                <Quantity>
                    {quantity}
                </Quantity>

                <Action>
                    <IconPlus/>
                </Action>
            </SectionQuantity>

            <Button>
                <Title>
                    {title}
                </Title>

                <Title>
                    R$ {price}
                </Title>
            </Button>
        </Container>
    )
}
