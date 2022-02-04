import React from 'react';

import { 
    Container,
    Form,
    Fields,
    InputForm
} from './styles';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';

export function Login() {

    return (
        <Background>
            <Container>
                <Form>
                    <Fields>
                        <InputForm/>
                        <InputForm/>
                    </Fields>
                    <Button title="Entrar"/>
                </Form>
            </Container>
        </Background>
    );
}