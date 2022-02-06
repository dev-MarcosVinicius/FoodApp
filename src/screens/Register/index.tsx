import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../../components/Button';
import { UsersServices } from '../../services/users';

import { 
    Container,
    Subtitle,
    Form,
    Fields,
    SeparetorBetween,
    InputLarge,
    SectionMedium,
    SectionLarge,
    InputMasked,
    Modal,
} from './styles'
import { Alert } from '../../components/Alert';
import { Header } from '../../components/Header';

export function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [celPhone, setCelPhone] = useState('');
    const [addres, setAddres] = useState('');
    const [number, setNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    async function registerUser() {
        await UsersServices.registerUser({
            id: uuid.v4().toString(),
            fullName,
            email,
            password,
            confirmPassword,
            celPhone,
            addres,
            number
        })
        .then(response => {
            console.log('Deu bom')
        })
        .catch(error => {
            setModalVisible(true);
        })
    }

    function validateFields() {
        if (
            !fullName.trim()
            ||
            !email.trim()
            ||
            !celPhone.trim()
            ||
            !addres.trim()
            ||
            !number.trim()
            ||
            !password.trim()
            ||
            !confirmPassword.trim()
        ) return setModalVisible(true);
        return registerUser();
    }

    function closeModal() {
        setModalVisible(false);
    }

    function navigateTo(screen: string) {
        navigation.navigate(screen);
    }
    
    return (
        <Container>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                statusBarTranslucent
                onRequestClose={closeModal}
            >
                <Alert
                    title="Error!"
                    description="Os campos (E-mail, Celular), sao obrigatorios."
                    buttonTitle="Voltar"
                    exec={closeModal}
                />
            </Modal>

            <Header
                leftIconName='arrow-left'
                leftIcon={true}
                leftExec={() => navigateTo("SignIn")}
                title="Cadastro"
            />

            <Form>
                <Fields>
                    <SectionLarge>
                        <Subtitle>
                            Nome Completo
                        </Subtitle>
                        <InputLarge
                            placeholder="Maria Carvalho de Azevedo"
                            onChangeText={setFullName}
                        />
                    </SectionLarge>

                    <SectionLarge>
                        <Subtitle>
                            E-mail
                        </Subtitle>
                        <InputLarge
                            value={email}
                            placeholder="exemplo@teste.com"
                            onChangeText={setEmail}
                        />
                    </SectionLarge>

                    <SectionLarge>
                        <Subtitle>
                            Senha
                        </Subtitle>
                        <InputLarge
                            value={password}
                            placeholder="*******"
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                    </SectionLarge>

                    <SectionLarge>
                        <Subtitle>
                            Confirmar Senha
                        </Subtitle>
                        <InputLarge
                            value={confirmPassword}
                            placeholder="*******"
                            onChangeText={setConfirmPassword}
                            secureTextEntry={true}
                        />
                    </SectionLarge>

                    <SectionLarge>
                        <Subtitle>
                            Celular
                        </Subtitle>
                        <InputMasked
                            type={'cel-phone'}
                            placeholder="(85) 99999-9999"
                            keyboardType="numeric"
                            value={celPhone}
                            onChangeText={setCelPhone}
                        />
                    </SectionLarge>

                    <SeparetorBetween>
                        <SectionMedium>
                            <Subtitle>
                                Logradouro
                            </Subtitle>
                            <InputLarge
                                placeholder="Rua Paulo Saboia"
                                onChangeText={setAddres}
                            />
                        </SectionMedium>

                        <SectionMedium>
                            <Subtitle>
                                Numero
                            </Subtitle>
                            <InputLarge
                                placeholder="543"
                                onChangeText={setNumber}
                            />
                        </SectionMedium>
                    </SeparetorBetween>
                </Fields>

                <Button
                    title="Cadastrar"
                    onPress={validateFields}
                />
            </Form>
        </Container>
    )
}
