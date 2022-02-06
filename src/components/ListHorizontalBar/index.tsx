import React, { useState } from 'react';

import { 
    Container,
    List,
    SeparatorList,
    Title,
    Item
} from './styles';
import { CategoryProps, ListProps } from '../../shared/types/list.type';

export function ListHorizontalBar({data, onCategorySelected}: ListProps) {
    const [selectedId, setSelectedId] = useState(null);

    function handleSelectCategory(category: CategoryProps) {
        setSelectedId(category.id)
        onCategorySelected(category)
    }

    return (
        <Container>
            <List
                data={data}
                extraData={selectedId}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => (
                    <SeparatorList/>
                )}
                renderItem={({item}) => (
                    <Item
                        onPress={() => handleSelectCategory(item)}
                    >
                        <Title
                            selected={selectedId == item.id}
                        >{item.title}</Title>
                    </Item>
                )}
            />
        </Container>
    );
}