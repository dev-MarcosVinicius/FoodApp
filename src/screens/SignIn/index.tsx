import React from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { 
    Container,
    Content,
    Image,
    Title,
    Subtitle
 } from './styles';
import { useAuth } from '../../hooks/auth';

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

                {/* {
                    loading 
                    ?
                    <ActivityIndicator color={theme.colors.primary}/>
                    :
                    <ButtonIcon 
                        title='Entrar com Discord'
                        onPress={handleSignIn}
                    />
                } */}
                
            </Content>
        </Container>
    );
}