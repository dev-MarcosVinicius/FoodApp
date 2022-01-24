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
    SectionLarge
} from './styles'

export function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [celPhone, setCelPhone] = useState('');
    const [addres, setAddres] = useState('');
    const [number, setNumber] = useState('');

    function maskValidate(text: string, maskType: string) {
        const maskTypes = {
            'phone': (number) => {
                return number;
            }
        },
        formatText = maskTypes[maskType];

        console.log("Text ", formatText(text))

        setCelPhone(formatText(text))
    }

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
                            placeholder="exemplo@teste.com"
                            onChangeText={setEmail}
                        />
                    </SectionLarge>

                    <SectionLarge>
                        <Subtitle>
                            Celular
                        </Subtitle>
                        <InputLarge
                            placeholder="5585912345678"
                            onChangeText={(text) => maskValidate(text, 'phone')}
                            keyboardType="numeric"
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
