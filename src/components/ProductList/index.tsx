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
    ZeroProducts
} from './styles';
import { ProductProps, ListProductProps } from '../../shared/types/list.type';
import StringFormat from '../../shared/utils/string/format.util';

export function ProductList({data, onProductSelected}: ListProductProps) {

    function handleSelectCategory(product: ProductProps) {
        onProductSelected(product)
    }

    return (
        <Container>
            {
                data.length <= 0
                ?
                <ZeroProducts>
                    Não foi possivel encontrar nenhum produto.
                </ZeroProducts>
                :
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
                                            {StringFormat.substring(item.description, 50)}
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
            }
        </Container>
    );
}