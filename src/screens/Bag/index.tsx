import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { 
    Container,
    Content,
    Title,
    Subtitle,
 } from './styles';

export function Bag() {
    const navigation = useNavigation();

    return (
        <Container>
            <Content>
                <Title>
                    Conecte-se e
                    Encontre seus
                    pratos preferidos.
                </Title>

                <Subtitle>
                    Faca seus pedidos de forma rapida {`\n`}
                    no seu restaurante preferido.
                </Subtitle>
            </Content>
        </Container>
    );
}