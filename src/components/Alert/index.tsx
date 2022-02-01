import React from 'react';
import { Octicons } from '@expo/vector-icons';

import {
    Title,
    ContainerNotify,
    ContentNotify,
    Description,
    Separator,
    Button,
    ButtonTitle
} from './styles'
import { AlertProps } from '../../shared/types/alert.type';

export function Alert({ title, description, buttonTitle, exec }: AlertProps) {
    return (
        <ContainerNotify>
            <ContentNotify>
                <Octicons name="alert" size={40} color="white"/>

                <Title>
                    {title}
                </Title>

                <Description>
                    {description}
                </Description>

                <Separator/>

                <Button onPress={exec}>
                    <ButtonTitle>
                        {buttonTitle}
                    </ButtonTitle>
                </Button>
            </ContentNotify>
        </ContainerNotify>
    )
}
