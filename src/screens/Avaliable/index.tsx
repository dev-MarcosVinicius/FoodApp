import React from 'react';

import { 
    Container,
    Description
} from './styles';

export function Avaliable({route}) {
    return (
        <Container>
            <Description>
                {route.params.title}
            </Description>
        </Container>
    );
}