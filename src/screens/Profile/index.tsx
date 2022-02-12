import React, { useEffect, useState } from 'react';

import { 
    Container,
    Content
} from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { ProfileList } from '../../components/ProfileList';

export function Profile() {
    const navigation = useNavigation();

    function handleBackScreen() {
        navigation.goBack();
    }

    function handleSelectItem() {
        console.log("Clicaram")
    }

    // async function getProductsOnBag() {
    //     const items = await BagUtil.getStorage();
    //     setBag(items);
    // }

    // useEffect(() => {
    //     getProductsOnBag();
    // }, [])

    return (
        <Container>
            <Header
                leftIcon={true}
                leftIconName='arrow-left'
                leftExec={handleBackScreen}
                title="Perfil"
            />

            <Content>
                <ProfileList
                    data={[]}
                    onItemSelected={handleSelectItem}
                />

                {/* <Footer>
                    <BagButton
                        title='Continuar'
                        totalPrice={`${getTotalPrice()}`}
                    />
                </Footer> */}
            </Content>
        </Container>
    );
}