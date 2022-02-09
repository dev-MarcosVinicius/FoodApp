import React from 'react';

import { 
    Container,
    Content,
    ImageProduct,
    Description,
    Section,
    UnitPrice,
    TotalPrice
} from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import StringFormat from '../../shared/utils/string/format.util';

export function Product({route}) {
    const navigation = useNavigation();

    function handleBackScreen() {
        navigation.goBack();
    }

    function handleAvaliableSelected() {
        console.log('Avaliação');
    }
    return (
        <Container>
            <Header
                leftIcon={true}
                leftIconName='arrow-left'
                leftExec={handleBackScreen}
                title={`${route.params.title}`}
                rightIcon={true}
                rightIconName='star'
                rightExec={handleAvaliableSelected}
            />

            <Content>
                <ImageProduct
                    source={{uri: route.params.imageUrl}}
                    resizeMode="cover"
                />

                <Description>
                    {StringFormat.substring(route.params.description, 300)}
                </Description>

                <Section>
                    <UnitPrice>
                        Valor Unitario: R$ 10.50
                    </UnitPrice>

                    <TotalPrice>
                        Total: R$ 21.00
                    </TotalPrice>
                </Section>
            </Content>
        </Container>
    );
}