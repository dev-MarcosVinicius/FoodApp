import React, { useEffect, useState } from 'react';

import { 
    Container,
    Content,
    Footer,
    Modal,
    ModalView,
    Description
} from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import BagUtil from '../../shared/utils/bag/bag.util';
import { BagList } from '../../components/BagList';
import { BagButton } from '../../components/BagButton';
import { ButtonModal } from '../../components/ButtonModal';
import { BagStorage } from '../../shared/types/bag.type';

export function Bag() {
    const navigation = useNavigation();
    const [bag, setBag] = useState([]);
    const [product, setProduct] = useState<BagStorage>();
    const [modalVisible, setModalVisible] = useState(false);

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
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                statusBarTranslucent
                onRequestClose={closeModal}
            >
                <ModalView>
                    <Description>
                        Deseja realmente remover o produto da Sacola?
                    </Description>

                    <ButtonModal
                        title='Confirmar'
                        onPress={handleConfirmRemove}
                    />
                </ModalView>
            </Modal>

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
                    />
                </Footer>
            </Content>
        </Container>
    );
}