import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import { Button } from '../../components/Button';
import { UsersServices } from '../../services/users';

import { 
    Container,
    Header,
    Title,
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

export function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [celPhone, setCelPhone] = useState('');
    const [addres, setAddres] = useState('');
    const [number, setNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    async function registerUser() {
        await UsersServices.registerUser({
            id: uuid.v4().toString(),
            fullName,
            email,
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
        ) return setModalVisible(true);
        return registerUser();
    }

    function closeModal() {
        setModalVisible(false);
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

            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>

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
