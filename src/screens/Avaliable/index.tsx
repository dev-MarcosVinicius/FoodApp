import React from 'react';
import { Header } from '../../components/Header';

import { 
    Container,
    Description
} from './styles';

export function Avaliable({route}) {
    return (
        <Container>
            <Header
                title='Avaliação'
            />
            <Description>
                {route.params.title}
            </Description>
        </Container>
    );
}