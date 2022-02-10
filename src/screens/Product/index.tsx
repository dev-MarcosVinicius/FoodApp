import React, { useState } from 'react';

import { 
    Container,
    Content,
    ImageProduct,
    Description,
    UnitPrice,
    Footer
} from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import StringFormat from '../../shared/utils/string/format.util';
import { ButtonQuantity } from '../../components/ButtonQuantity';

export function Product({route}) {
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState("1");

    function handleBackScreen() {
        navigation.goBack();
    }

    function handleAvaliableSelected() {
        console.log('Avaliação');
    }

    function handleReduceQuantity() {
        console.log('handleReduceQuantity');
    }

    function handleIncrementQuantity() {
        console.log('handleIncrementQuantity');
    }

    function handleAddProduct() {
        console.log('handleAddProduct');
    }

    function getTotalPrice() {
        return Number(route.params.price) * Number(quantity);
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

                <UnitPrice>
                    R$ {StringFormat.formatPrice(route.params.price)}
                </UnitPrice>

                <Footer>
                    <ButtonQuantity
                        title='Adicionar'
                        price={`${StringFormat.formatPrice(getTotalPrice())}`}
                        quantity={`${quantity}`}
                    />
                </Footer>
            </Content>
        </Container>
    );
}