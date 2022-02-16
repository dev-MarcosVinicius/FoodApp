export type AlertProps = {
    title: string;
    description: string;
    buttonTitle: string;
    exec: () => void;
}

export type AlertRemoveBagProps = {
    modalVisible: boolean;
    execRemove: () => void;
    closeModal: () => void;
}

export type NotifyProps = {
    title: string;
    modalVisible: boolean;
    closeModal: () => void;
}