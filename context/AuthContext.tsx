import { createContext, useContext, useState, ReactNode, PropsWithChildren } from "react";
import { useStorageState } from "../hooks/useStorageState";

interface AuthContextType {
    signIn: (email: string, password: string) => boolean;
    signOut: () => void;
    session: string | null;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useSession() {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }

    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session');
    const signIn = (email: string, password: string) => {
        // Dummy validation
        console.log(`Signing in with email: ${email} and password: ${password}`);
        if (email === 'test@test.com' && password === 'password') {
            setSession(JSON.stringify({ email, token: 'dummy-token-123' }));
            return true;
        }
        return false;
    };
    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut: () => {
                    setSession(null);
                },
                session,
                isLoading,
            }}>
            {children}
        </AuthContext.Provider>
    );
}

