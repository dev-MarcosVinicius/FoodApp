export type UserProps = {
    id: string;
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    celPhone: string;
    addres: string;
    number: string;
}

export type UserRequest = {
    id: string;
    addres: string;
    celPhone: string;
    email: string;
    fullName: string;
    number: string;
}