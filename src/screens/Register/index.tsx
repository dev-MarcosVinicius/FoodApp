import React, { useState } from 'react';
import { Button } from '../../components/Button';

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
    const [transactionType, setTransactionType] = useState('');
    const [fullName, setFullName] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    
    function handleSeparetorBetweenelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
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
                            placeholder="InputLarge"
                        />
                    </SectionLarge>

                    <SectionLarge>
                        <Subtitle>
                            E-mail
                        </Subtitle>
                        <InputLarge
                            placeholder="InputMedium"
                        />
                    </SectionLarge>

                    <SectionLarge>
                        <Subtitle>
                            InputSmall
                        </Subtitle>
                        <InputLarge
                            placeholder="InputSmall"
                        />
                    </SectionLarge>

                    <SeparetorBetween>
                        <SectionMedium>
                            <Subtitle>
                                Logradouro
                            </Subtitle>
                            <InputLarge
                                placeholder="Logradouro"
                            />
                        </SectionMedium>

                        <SectionMedium>
                            <Subtitle>
                                Numero
                            </Subtitle>
                            <InputLarge
                                placeholder="Numero"
                            />
                        </SectionMedium>
                    </SeparetorBetween>
                </Fields>

                <Button title="Enviar"/>
            </Form>
        </Container>
    )
}
