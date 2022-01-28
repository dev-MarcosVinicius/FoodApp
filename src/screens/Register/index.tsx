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
    InputMasked
} from './styles'

export function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [celPhone, setCelPhone] = useState('');
    const [addres, setAddres] = useState('');
    const [number, setNumber] = useState('');

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
            console.log('Deu ruim')
        })
    }
    
    return (
        <Container>
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
                    onPress={registerUser}
                />
            </Form>
        </Container>
    )
}
