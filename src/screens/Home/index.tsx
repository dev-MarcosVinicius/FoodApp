import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import { 
    Container,
    Content,
    Title,
    ContainerTitle,
    IconProduct,
    LoadingProduct,
} from './styles';
import { Header } from '../../components/Header';
import { ListHorizontalBar } from '../../components/ListHorizontalBar';
import { CategoryProps, ProductProps } from '../../shared/types/list.type';
import { ProductList } from '../../components/ProductList';
import { useNavigation } from '@react-navigation/native';
import { ProductServices } from '../../services/products';
import { CategoryServices } from '../../services/categories';
import BagUtil from '../../shared/utils/bag/bag.util';

export function Home() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [popBag, setPopBag] = useState(false);

    async function handleSelectCategory(category: CategoryProps) {
        setLoadingProducts(true);
        await setFilterProducts(products.filter(product => product.category == category.title));
        setLoadingProducts(false);
    }

    function handleSelectProduct(product: ProductProps) {
        navigation.navigate('Product', product);
    }

    function handleOpenBag() {
        navigation.navigate('Bag');
    }

    function handleOpenProfile() {
        navigation.navigate('Profile');
    }

    async function verifyBag() {
        const items = await BagUtil.getStorage();
        setPopBag(!!items.length);
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
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])

    useEffect(() => {
        verifyBag();
    }, [isFocused])

    return (
        <Container>
            <Header
                leftIcon={true}
                leftIconName='shopping-bag'
                leftIconPop={popBag}
                leftExec={handleOpenBag}
                title='Dona Marmita'
                rightIcon={true}
                rightIconName='user'
                rightExec={handleOpenProfile}
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