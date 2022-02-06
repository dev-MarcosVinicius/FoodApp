import React from 'react';

import { 
    Container,
    Content,
    Title,
    ContainerTitle,
    IconProduct
} from './styles';
import { Header } from '../../components/Header';
import { ListHorizontalBar } from '../../components/ListHorizontalBar';
import { CategoryProps, ProductProps } from '../../shared/types/list.type';
import { ProductList } from '../../components/ProductList';

export function Home() {

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
    ],
    products = [
        {
            id: "1",
            title: "Marmita M",
            description: "Loresams japsdopm asdknpom p o op p opjoj",
            price: 10.50
        },
        {
            id: "2",
            title: "Marmita M",
            description: "Loresams japsdopm asdknpom p o op p opjoj",
            price: 10.50
        },
        {
            id: "3",
            title: "Marmita M",
            description: "Loresams japsdopm asdknpom p o op p opjoj",
            price: 10.50
        },
        {
            id: "4",
            title: "Marmita M",
            description: "Loresams japsdopm asdknpom p o op p opjoj",
            price: 10.50
        },
        {
            id: "5",
            title: "Marmita M",
            description: "Loresams japsdopm asdknpom p o op p opjoj",
            price: 10.50
        },
        {
            id: "6",
            title: "Marmita M",
            description: "Loresams japsdopm asdknpom p o op p opjoj",
            price: 10.50
        },
        {
            id: "7",
            title: "Marmita M",
            description: "Loresams japsdopm asdknpom p o op p opjoj",
            price: 10.50
        },
        {
            id: "8",
            title: "Marmita M",
            description: "Loresams japsdopm asdknpom p o op p opjoj",
            price: 10.50
        },
        {
            id: "9",
            title: "Marmita M",
            description: "Loresams japsdopm asdknpom p o op p opjoj",
            price: 10.50
        },
        {
            id: "10",
            title: "Marmita M",
            description: "Loresams japsdopm asdknpom p o op p opjoj",
            price: 10.50
        },
        {
            id: "11",
            title: "Marmita M",
            description: "Loresams japsdopm asdknpom p o op p opjoj",
            price: 10.50
        }
    ]

    function handleSelectCategory(category: CategoryProps) {
        console.log(category)
    }

    function handleSelectProduct(product: ProductProps) {
        console.log(product)
    }

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