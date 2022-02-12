export type HeaderProps = {
    leftIcon?: boolean;
    leftIconName?: string;
    leftIconPop?: boolean;
    leftExec?: () => void;
    title: string;
    rightIcon?: boolean;
    rightIconName?: string;
    rightExec?: () => void;
}