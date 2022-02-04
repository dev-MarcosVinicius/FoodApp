import React from 'react';

import { 
    Container,
    Form,
    Fields,
    InputForm,
    Title
} from './styles';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';

export function Login() {

    return (
        <Background>
            <Container>
                <Form>
                    <Title>
                        Acesse sua conta!
                    </Title>
                    <Fields>
                        <InputForm placeholder="Email"/>
                        <InputForm placeholder="Senha"/>
                    </Fields>
                    <Button title="Entrar"/>
                </Form>
            </Container>
        </Background>
    );
}