import React, { useEffect, useState } from 'react';

import { 
    Container,
    Content,
    Title,
    ContainerTitle,
    IconProduct,
    LoadingProduct,
    LoadingCategory
} from './styles';
import { Header } from '../../components/Header';
import { ListHorizontalBar } from '../../components/ListHorizontalBar';
import { CategoryProps, ProductProps } from '../../shared/types/list.type';
import { ProductList } from '../../components/ProductList';
import { useNavigation } from '@react-navigation/native';
import { ProductServices } from '../../services/products';
import { CategoryServices } from '../../services/categories';

export function Home() {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [loadingCategories, setLoadingCategories] = useState(true);

    async function handleSelectCategory(category: CategoryProps) {
        setFilterProducts(products.filter(product => product.category == category.title));
    }

    function handleSelectProduct(product: ProductProps) {
        navigation.navigate('Product', product);
    }

    async function getProducts() {
        const getProducts = await ProductServices.findAllProducts();

        if (getProducts.status == 200) {
            setProducts(getProducts.data);
            setFilterProducts(getProducts.data)
        }

        setLoadingProducts(false)
    }

    async function getCategories() {
        const getCategories = await CategoryServices.findAllCategories();

        if (getCategories.status == 200) setCategories(getCategories.data);
        
        setLoadingCategories(false)
    }

    useEffect(() => {
        getProducts();
        getCategories();
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

            {
                loadingCategories
                ?
                <LoadingCategory/>
                :
                <ListHorizontalBar
                    data={categories}
                    onCategorySelected={handleSelectCategory}
                />
            }


            <Content>
                <ContainerTitle>
                    <IconProduct name="align-justify"/>
                    <Title>Produtos</Title>
                </ContainerTitle>

                {
                    loadingProducts
                    ?
                    <LoadingProduct/>
                    :
                    <ProductList
                        data={filterProducts}
                        onProductSelected={handleSelectProduct}
                    />
                }
            </Content>
        </Container>
    );
}