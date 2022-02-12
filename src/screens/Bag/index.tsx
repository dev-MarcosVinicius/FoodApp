import React, { useEffect, useState } from 'react';

import { 
    Container,
    Content,
    Footer
} from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import BagUtil from '../../shared/utils/bag/bag.util';
import { BagList } from '../../components/BagList';

export function Bag() {
    const navigation = useNavigation();
    const [bag, setBag] = useState([]);

    function handleBackScreen() {
        navigation.goBack();
    }

    function handleSelectItemOnBag() {
        console.log("Clicaram")
    }

    async function getProductsOnBag() {
        const items = await BagUtil.getStorage();
        setBag(items);
    }

    useEffect(() => {
        getProductsOnBag();
    }, [])

    return (
        <Container>
            <Header
                leftIcon={true}
                leftIconName='arrow-left'
                leftExec={handleBackScreen}
                title="Sacola"
            />

            <Content>
                <BagList
                    data={bag}
                    onProductSelected={handleSelectItemOnBag}
                />

                <Footer>
                    
                </Footer>
            </Content>
        </Container>
    );
}