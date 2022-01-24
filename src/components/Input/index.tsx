import React from 'react';

import { InputProps } from '../../shared/types/input.type';
import { Container } from './styles';


export function Input({...rest}: InputProps) {
    return (
        <Container {...rest}/>
    )
}
