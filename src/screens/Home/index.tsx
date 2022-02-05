import React from 'react';

import { 
    Container,
    Title
} from './styles';
import { Background } from '../../components/Background';

export function Home() {

    return (
        <Background>
            <Container>
                <Title>
                    Acesse sua conta!
                </Title>
            </Container>
        </Background>
    );
}