import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    Title,
    Content
} from './styles'
import { HeaderProps } from '../../shared/types/header.type';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Header({
    leftIcon = false,
    leftIconName,
    leftExec,
    title,
    rightIcon = false,
    rightIconName,
    rightExec
}: HeaderProps) {
    return (
        <Container>
            {
                leftIcon
                ?
                <TouchableOpacity>
                    <Feather name={leftIconName} size={24} color="white" onPress={leftExec}/>
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
                    <Feather name={rightIconName} size={24} color="white" onPress={rightExec}/>
                </TouchableOpacity>
                :
                <Content/>
            }
        </Container>
    )
}
