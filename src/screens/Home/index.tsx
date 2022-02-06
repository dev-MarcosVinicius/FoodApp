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
                leftIcon={true}
                leftIconName='shopping-bag'
                title=''
                rightIcon={true}
                rightIconName='user'
            />

            <Title>
                Acesse sua conta!
            </Title>
        </Container>
    );
}