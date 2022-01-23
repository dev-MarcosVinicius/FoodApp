import { ReactNode } from "react";
import * as AuthSession from "expo-auth-session";

import { UserProps } from './user.type';

export type AuthContextDataProps = {
    user: UserProps;
    loading: boolean;
    signIn: () => Promise<void>;
}

export type AuthProviderProps = {
    children: ReactNode;
}

export type AuthorizationResponseProps = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    }
}