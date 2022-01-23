import React from 'react';
import { Alert } from 'react-native';

import { 
    Container,
    Content,
    Title,
    Subtitle,
    ButtonContainer,
    SubtitleButton,
    Separetor
 } from './styles';
import { useAuth } from '../../hooks/auth';
import { Button } from '../../components/Button';
import { Background } from '../../components/Background';

export function SignIn() {
    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <Background>
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

                <ButtonContainer>
                    <Button
                        title='Acessar'
                        // onPress={handleSignIn}
                    />

                    <Separetor/>

                    <SubtitleButton>
                        Nao possui cadastro?
                    </SubtitleButton>

                    <Button
                        title='Cadastrar'
                        // onPress={handleSignIn}
                    />
                </ButtonContainer>
            </Container>
        </Background>
    );
}