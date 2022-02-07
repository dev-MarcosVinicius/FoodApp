import React from 'react';

import { 
    Container,
    List,
    SeparatorList,
    Title,
    Item,
    Content,
    ImageProduct,
    Fields,
    SuperiorFields,
    Price,
    PriceField,
    IconPrice,
    MiddleFields,
    SubTitle,
    InferiorFields,
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
                                source={{uri: item.imageUrl}}
                                resizeMode="cover"
                            />
                            
                            <Fields>
                                <SuperiorFields>
                                    <Title>
                                        {item.title}
                                    </Title>
                                </SuperiorFields>

                                <MiddleFields>
                                    <SubTitle>
                                        {item.description}
                                    </SubTitle>
                                </MiddleFields>

                                <InferiorFields>
                                    <PriceField>
                                        <IconPrice/>
                                        <Price>
                                            {item.price}
                                        </Price>
                                    </PriceField>
                                </InferiorFields>
                            </Fields>
                        </Content>
                    </Item>
                )}
            />
        </Container>
    );
}