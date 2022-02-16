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
import { BagButton } from '../../components/BagButton';
import { BagStorage } from '../../shared/types/bag.type';
import { AlertRemoveBag } from '../../components/AlertRemoveBag';
import { Notify } from '../../components/Notify';

export function Bag() {
    const navigation = useNavigation();
    const [bag, setBag] = useState([]);
    const [product, setProduct] = useState<BagStorage>();
    const [modalVisible, setModalVisible] = useState(false);
    const [notifyVisible, setNotifyVisible] = useState(false);

    function closeModal() {
        setModalVisible(false);
    }

    function handleBackScreen() {
        navigation.goBack();
    }

    function handleSelectItemOnBag(product) {
        setModalVisible(true);
        setProduct(product);
    }

    function handleConfirmOrder() {
        setNotifyVisible(true);

        setInterval(() => {
            setNotifyVisible(false);
        }, 5000)
    }

    async function handleConfirmRemove() {
        await BagUtil.removeStorage(product);
        setModalVisible(false);
        getProductsOnBag();
    }

    async function getProductsOnBag() {
        const items = await BagUtil.getStorage();

        if (items) setBag(items);
    }

    function getTotalPrice() {
        let total = 0;
        for (const product of bag) {
            total += Number(product.price) * Number(product.quantity)
        }
        return total;
    }

    useEffect(() => {
        getProductsOnBag();
    }, [])

    return (
        <Container>
            <AlertRemoveBag
                modalVisible={modalVisible}
                closeModal={closeModal}
                execRemove={handleConfirmRemove}
            />

            <Notify
                title='Pedido Realizado!'
                modalVisible={notifyVisible}
                closeModal={() => setNotifyVisible(!notifyVisible)}
            />

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
                    <BagButton
                        title='Continuar'
                        totalPrice={`${getTotalPrice()}`}
                        onPress={handleConfirmOrder}
                    />
                </Footer>
            </Content>
        </Container>
    );
}