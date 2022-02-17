import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { 
    Container,
    Description,
    Content
} from './styles';
import { Header } from '../../components/Header';

export function Avaliable({route}) {
    const navigation = useNavigation();
    return (
        <Container>
            <Header
                title='Avaliação'
                leftIcon={true}
                leftIconName='arrow-left'
                leftExec={() => navigation.goBack()}
            />

            <Content>
                <Description>
                    {route.params.title}
                </Description>
            </Content>
        </Container>
    );
}