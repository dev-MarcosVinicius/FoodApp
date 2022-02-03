import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import {
    Container,
    Title,
    Content
} from './styles'
import { HeaderProps } from '../../shared/types/header.type';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export function Header({ leftIcon = false, leftExec, title, rightIcon = false, rightExec }: HeaderProps) {
    return (
        <Container>
            {
                leftIcon
                ?
                <TouchableOpacity>
                    <AntDesign name="arrowleft" size={24} color="white" onPress={leftExec}/>
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
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                :
                <Content/>
            }
        </Container>
    )
}
