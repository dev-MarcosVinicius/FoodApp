import { ReactNode } from "react";
import * as AuthSession from "expo-auth-session";

import { UserProps } from './user.type';

export type AuthContextDataProps = {
    user: UserProps;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
}

export type AuthProviderProps = {
    children: ReactNode;
}

export type AuthorizationResponseProps = AuthSession.AuthSessionResult & {
    user: UserProps
}