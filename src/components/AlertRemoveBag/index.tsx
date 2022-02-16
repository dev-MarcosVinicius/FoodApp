import React, { useState } from 'react';

import {
    ContainerNotify,
    Description,
    Modal,
    ModalView,
} from './styles'
import { AlertRemoveBagProps } from '../../shared/types/alert.type';
import { ButtonModal } from '../../components/ButtonModal';

export function AlertRemoveBag({ modalVisible, execRemove, closeModal }: AlertRemoveBagProps) {
    return (
        <ContainerNotify>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                statusBarTranslucent
                onRequestClose={closeModal}
            >
                <ModalView>
                    <Description>
                        Deseja realmente remover o produto da Sacola?
                    </Description>

                    <ButtonModal
                        title='Confirmar'
                        onPress={execRemove}
                    />
                </ModalView>
            </Modal>
        </ContainerNotify>
    )
}
