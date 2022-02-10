import React, { useEffect, useReducer, useState } from 'react';

import { 
    Container,
    Content,
    Title,
    ContainerTitle,
    IconProduct,
    LoadingProduct
} from './styles';
import { Header } from '../../components/Header';
import { ListHorizontalBar } from '../../components/ListHorizontalBar';
import { CategoryProps, ProductProps } from '../../shared/types/list.type';
import { ProductList } from '../../components/ProductList';
import { useNavigation } from '@react-navigation/native';
import { ProductServices } from '../../services/products';

export function Home() {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [loadingProducts, changeLoadingProducts] = useReducer(
        (state) => {return !state},
        true
    );

    const categories = [
        {
            id: '1',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '2',
            title: 'Bebidas',
            category: 'foods'
        },
        {
            id: '3',
            title: 'Sobremesas',
            category: 'foods'
        },
        {
            id: '4',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '5',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '6',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '7',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '8',
            title: 'Comidas',
            category: 'foods'
        }
    ];

    function handleSelectCategory(category: CategoryProps) {
        console.log(category)
    }

    function handleSelectProduct(product: ProductProps) {
        navigation.navigate('Product', product);
    }

    async function getProducts() {
        const getProducts = await ProductServices.findAllProducts();

        if (getProducts.status != 200) {

        }

        setProducts(getProducts.data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <Container>
            <Header
                leftIcon={true}
                leftIconName='shopping-bag'
                title='Dona Marmita'
                rightIcon={true}
                rightIconName='user'
            />

            <ListHorizontalBar
                data={categories}
                onCategorySelected={handleSelectCategory}
            />

            <Content>
                <ContainerTitle>
                    <IconProduct name="align-justify"/>
                    <Title>Produtos</Title>
                </ContainerTitle>

                <ProductList
                    data={products}
                    onProductSelected={handleSelectProduct}
                />
            </Content>
        </Container>
    );
}