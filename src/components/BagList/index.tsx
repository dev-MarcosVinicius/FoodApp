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
    InferiorFields,
    ZeroProducts,
    PopUpQuantity,
    TitleQuantity
} from './styles';
import { ListBagProps, BagProps } from '../../shared/types/list.type';

export function BagList({data, onProductSelected}: ListBagProps) {

    function handleSelectCategory(product: BagProps) {
        onProductSelected(product)
    }

    return (
        <Container>
            <List
                data={data}
                keyExtractor={item => item._id}
                ItemSeparatorComponent={() => (
                    <SeparatorList/>
                )}
                ListFooterComponent={() => (
                    <SeparatorList/>
                )}
                ListEmptyComponent={() => (
                    <ZeroProducts>
                        Sua sacola esta vazia.
                    </ZeroProducts>
                )}
                renderItem={({item}) => (
                    <Item
                        onPress={() => handleSelectCategory(item)}
                    >
                        <Content> 
                            <Fields>
                                <SuperiorFields>
                                    <Title>
                                        {item.title}
                                    </Title>
                                </SuperiorFields>

                                <InferiorFields>
                                    <PriceField>
                                        <Price>
                                            R$ {item.price}
                                        </Price>
                                    </PriceField>
                                </InferiorFields>
                            </Fields>

                            <ImageProduct
                                source={{uri: item.imageUrl}}
                                resizeMode="cover"
                            />

                            <PopUpQuantity>
                                <TitleQuantity>
                                    {item.quantity}
                                </TitleQuantity>
                            </PopUpQuantity>
                        </Content>
                    </Item>
                )}
            />
        </Container>
    );
}