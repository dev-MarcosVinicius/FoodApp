import React from 'react';

import { 
    Container,
    Content
} from './styles';
import { Header } from '../../components/Header';
import { ListHorizontalBar } from '../../components/ListHorizontalBar';

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
    ]

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
            />

            <Content/>
        </Container>
    );
}