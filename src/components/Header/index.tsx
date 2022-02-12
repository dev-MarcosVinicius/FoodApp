import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    Title,
    Content,
    PopUpIcon
} from './styles'
import { HeaderProps } from '../../shared/types/header.type';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Header({
    leftIcon = false,
    leftIconName,
    leftIconPop = false,
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
                    { leftIconPop && <PopUpIcon/> }
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
