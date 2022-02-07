import React from 'react';

import { 
    Container,
    Form,
    Title
} from './styles';
import { Background } from '../../components/Background';

export function Product({route}) {
    console.log(route)
    return (
        <Background>
            <Container>
                <Form>
                    <Title>
                        Acesse sua conta!
                    </Title>
                </Form>
            </Container>
        </Background>
    );
}