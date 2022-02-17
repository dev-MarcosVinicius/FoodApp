import React, 
{ 
    createContext,
    useContext,
    useState,
    useEffect
} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    AuthContextDataProps,
    AuthProviderProps,
} from '../shared/types/auth.type';
import { UserProps, UserRequest } from "../shared/types/user.type";
import { UsersServices } from "../services/users";

export const AuthContext = createContext({} as AuthContextDataProps);

function AuthProvider({ children }: AuthProviderProps) {
    const [ user, setUser ] = useState<UserRequest>({} as UserRequest);
    const [ loading, setLoading ] = useState(false);

    async function signIn(email: string, password: string) {
        try {
            setLoading(true);

            const userData = await UsersServices.loginUser(email, password);

            if (userData.status == 201 && userData.data) {
                await AsyncStorage.setItem('COLLECTION_USERS', JSON.stringify(userData.data));
                setUser(userData.data)
            }

            setLoading(false);
        } catch {
            throw new Error('Não foi possivel autenticar');
        }
    }

    async function loadUserStorageData() {
        const storage = await AsyncStorage.getItem('COLLECTION_USERS');

        if (storage) {
            const userLogged = JSON.parse(storage) as UserProps;

            setUser(userLogged);

            setLoading(false);
        }
    }

    useEffect(() => {
        loadUserStorageData();
    },[]);

    return (
        <AuthContext.Provider value={{ user, loading, signIn }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
}