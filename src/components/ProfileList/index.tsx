import React from 'react';

import { 
    Container,
    List,
    SeparatorList,
    Title,
    Item,
    Content,
    Fields,
    SuperiorFields,
    Price,
    PriceField,
    InferiorFields
} from './styles';
import { ListProfileProps, ProfileProps } from '../../shared/types/list.type';

export function ProfileList({data, onItemSelected}: ListProfileProps) {

    function handleSelectItem(item: ProfileProps) {
        onItemSelected(item)
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
                renderItem={({item}) => (
                    <Item
                        onPress={() => handleSelectItem(item)}
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
                        </Content>
                    </Item>
                )}
            />
        </Container>
    );
}