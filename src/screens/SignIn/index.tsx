import React from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { useAuth } from '../../hooks/auth';
import theme from '../../global/styles/theme';

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
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se e{`\n`}
                    Organize suas{`\n`}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seu games {`\n`}
                    favoritos com seus amigos
                </Text>

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
                
            </View>
        </View>
    );
}