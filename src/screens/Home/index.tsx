import React from 'react';

import { 
    Container,
    Content
} from './styles';
import { Header } from '../../components/Header';
import { ListHorizontalBar } from '../../components/ListHorizontalBar';
import { CategoryProps } from '../../shared/types/list.type';

export function Home() {

    const data = [
        {
            id: '1',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '2',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '3',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '4',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '5',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '6',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '7',
            title: 'Comidas',
            category: 'foods'
        },
        {
            id: '8',
            title: 'Comidas',
            category: 'foods'
        }
    ];

    function handleSelectCategory(category: CategoryProps) {
        console.log(category)
    }

    return (
        <Container>
            <Header
                leftIcon={true}
                leftIconName='shopping-bag'
                title=''
                rightIcon={true}
                rightIconName='user'
            />

            <ListHorizontalBar
                data={data}
                onCategorySelected={handleSelectCategory}
            />

            
            <Content/>
        </Container>
    );
}