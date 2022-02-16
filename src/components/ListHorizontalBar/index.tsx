import React, { useState } from 'react';

import { 
    Container,
    List,
    Title,
    Item,
    Content,
    Section,
    LoadingCategory
} from './styles';
import { CategoryProps, ListCategoryProps } from '../../shared/types/list.type';

export function ListHorizontalBar({data, onCategorySelected}: ListCategoryProps) {
    const [selectedId, setSelectedId] = useState(null);

    function handleSelectCategory(category: CategoryProps) {
        setSelectedId(category._id)
        onCategorySelected(category)
    }

    return (
        <Container>
            <Section>
                <List
                    data={data}
                    extraData={selectedId}
                    keyExtractor={item => item._id}
                    ListEmptyComponent={() => (
                        <LoadingCategory/>
                    )}
                    renderItem={({item}) => (
                        <Item
                            onPress={() => handleSelectCategory(item)}
                        >
                            <Content
                                selected={selectedId == item._id}
                            >
                                <Title
                                    selected={selectedId == item._id}
                                >{item.title}</Title>
                            </Content>
                        </Item>
                    )}
                />
            </Section>
        </Container>
    );
}