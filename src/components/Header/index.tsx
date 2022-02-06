import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    Title,
    Content
} from './styles'
import { HeaderProps } from '../../shared/types/header.type';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Header({ leftIcon = false, leftExec, title, rightIcon = false, rightExec }: HeaderProps) {
    return (
        <Container>
            {
                leftIcon
                ?
                <TouchableOpacity>
                    <Feather name="arrow-left" size={24} color="white" onPress={leftExec}/>
                </TouchableOpacity>
                :
                <Content/>
            }

            <Title>
                {title}
            </Title>

            {
                rightIcon
                ?
                <TouchableOpacity>
                    <Feather name="user" size={24} color="white" onPress={rightExec}/>
                </TouchableOpacity>
                :
                <Content/>
            }
        </Container>
    )
}
