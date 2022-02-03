import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';

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
    const navigation = useNavigation();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }

    function navigateTo(screen: string) {
        navigation.navigate(screen);
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
                        onPress={() => navigateTo('Login')}
                    />

                    <Separetor/>

                    <SubtitleButton>
                        Nao possui cadastro?
                    </SubtitleButton>

                    <Button
                        title='Cadastrar'
                        onPress={() => navigateTo('Register')}
                    />
                </ButtonContainer>
            </Container>
        </Background>
    );
}