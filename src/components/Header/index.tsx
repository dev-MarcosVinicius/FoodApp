import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import {
    Container,
    Title,
    Content
} from './styles'
import { HeaderProps } from '../../shared/types/header.type';

export function Header({ leftIcon = false, leftExec, title, rightIcon = false, rightExec }: HeaderProps) {
    return (
        <Container>
            {
                leftIcon
                ?
                <AntDesign name="arrowleft" size={24} color="white" onPress={leftExec}/>
                :
                <Content/>
            }

            <Title>
                {title}
            </Title>

            {
                rightIcon
                ?
                <AntDesign name="arrowleft" size={24} color="white" />
                :
                <Content/>
            }
        </Container>
    )
}
