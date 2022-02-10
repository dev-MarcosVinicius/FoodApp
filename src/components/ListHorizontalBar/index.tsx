import React, { useState } from 'react';

import { 
    Container,
    List,
    Title,
    Item,
    Content,
    Section
} from './styles';
import { CategoryProps, ListCategoryProps } from '../../shared/types/list.type';

export function ListHorizontalBar({data, onCategorySelected}: ListCategoryProps) {
    const [selectedId, setSelectedId] = useState(null);

    function handleSelectCategory(category: CategoryProps) {
        setSelectedId(category.id)
        onCategorySelected(category)
    }

    return (
        <Container>
            <Section>
                <List
                    data={data}
                    extraData={selectedId}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Item
                            onPress={() => handleSelectCategory(item)}
                        >
                            <Content
                                selected={selectedId == item.id}
                            >
                                <Title
                                    selected={selectedId == item.id}
                                >{item.title}</Title>
                            </Content>
                        </Item>
                    )}
                />
            </Section>
        </Container>
    );
}