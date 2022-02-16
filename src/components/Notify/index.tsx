import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

import {
    ContainerNotify,
    Description,
    Modal,
    ModalView,
} from './styles'
import { NotifyProps } from '../../shared/types/alert.type';

export function Notify({ title, modalVisible, closeModal }: NotifyProps) {
    const widthAnim = useRef(new Animated.Value(370)).current;
    const fadeOut = () => {
        Animated.timing(widthAnim, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: false
        }).start();
    };

    useEffect(() => {
        fadeOut()
    }, [modalVisible])

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
                    <Animated.View
                        style={[
                            styles.fadingContainer,
                            {
                                width: widthAnim
                            }
                        ]}
                    />
                    <Description >
                        {title}
                    </Description>
                </ModalView>
            </Modal>
        </ContainerNotify>
    )
}

const styles = StyleSheet.create({
    fadingContainer: {
        height: 5,
        width: 375,
        backgroundColor: "rgba(105,105,105,0.7)"
    },
  });