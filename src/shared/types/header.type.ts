export type HeaderProps = {
    leftIcon?: boolean;
    leftIconName?: string;
    leftExec?: () => void;
    title: string;
    rightIcon?: boolean;
    rightIconName?: string;
    rightExec?: () => void;
}