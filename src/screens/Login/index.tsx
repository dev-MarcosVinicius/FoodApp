import React, { useState } from 'react';

import { 
    Container,
    Form,
    Fields,
    InputForm,
    Title
} from './styles';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn(email, password);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Background>
            <Container>
                <Form>
                    <Title>
                        Acesse sua conta!
                    </Title>
                    <Fields>
                        <InputForm 
                            placeholder="Email"
                            onChangeText={setEmail}
                        />
                        <InputForm 
                            placeholder="Senha"
                            onChangeText={setPassword}
                        />
                    </Fields>
                    <Button 
                        title="Entrar"
                        onPress={handleSignIn}
                    />
                </Form>
            </Container>
        </Background>
    );
}