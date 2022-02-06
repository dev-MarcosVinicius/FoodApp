import React from 'react';

import { 
    Container,
    Title
} from './styles';
import { Header } from '../../components/Header';

export function Home() {



    return (
        <Container>
            <Header
                title=''
                rightIcon={true}
            />

            <Title>
                Acesse sua conta!
            </Title>
        </Container>
    );
}