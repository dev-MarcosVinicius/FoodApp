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

export function ButtonQuantity({ 
    title,
    price,
    quantity,
    minusPress,
    plusPress,
    confirmPress 
}: ButtonQuantityProps) {
    return (
        <Container>
            <SectionQuantity>
                <Action 
                    onPress={minusPress}
                    disabled={Number(quantity) <= 1}
                >
                    <IconMinus
                        disabled={Number(quantity) <= 1}
                    />
                </Action>

                <Quantity>
                    {quantity}
                </Quantity>

                <Action onPress={plusPress}>
                    <IconPlus/>
                </Action>
            </SectionQuantity>

            <Button onPress={confirmPress}>
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
