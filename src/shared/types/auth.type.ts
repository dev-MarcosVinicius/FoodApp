import { ReactNode } from "react";
import * as AuthSession from "expo-auth-session";

import { UserProps, UserRequest } from './user.type';

export type AuthContextDataProps = {
    user: UserRequest;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
}

export type AuthProviderProps = {
    children: ReactNode;
}

export type AuthorizationResponseProps = AuthSession.AuthSessionResult & {
    user: UserProps
}