import React, { useState } from 'react';

import { 
    Container,
    List,
    SeparatorList,
    Title,
    Item,
    Content,
    ImageProduct
} from './styles';
import { ProductProps, ListProductProps } from '../../shared/types/list.type';

export function ProductList({data, onProductSelected}: ListProductProps) {

    function handleSelectCategory(product: ProductProps) {
        onProductSelected(product)
    }

    return (
        <Container>
            <List
                data={data}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => (
                    <SeparatorList/>
                )}
                renderItem={({item}) => (
                    <Item
                        onPress={() => handleSelectCategory(item)}
                    >
                        <Content>
                            <ImageProduct
                                source={{uri: 'https://reactjs.org/logo-og.png'}}
                                resizeMode="cover"
                            />
                            <Title>
                                {item.title}
                            </Title>
                        </Content>
                    </Item>
                )}
            />
        </Container>
    );
}