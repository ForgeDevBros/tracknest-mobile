import { createContext, useContext, useState, ReactNode, PropsWithChildren } from "react";
import { useStorageState } from "../hooks/useStorageState";
import { supabase } from "@/lib/supabase";
import * as WebBrowser from 'expo-web-browser';

interface AuthContextType {
    signIn: (email: string, password: string) => boolean;
    signInWithGoogle: () => Promise<boolean>;
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
    const signInWithGoogle = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    scopes: 'openid profile email',
                    redirectTo: 'https://urxhawvjtclqbtyvtptn.supabase.co/auth/v1/callback'
                }
            });

            if (error) throw error;
            if (data?.url) {
                const result = await WebBrowser.openAuthSessionAsync(
                    data.url,
                    'tracknest://',
                    {
                        showInRecents: true,
                        createTask: true
                    }
                );
                if (result.type === 'success') {
                    const { data: authData } = await supabase.auth.getSession();
                    // then we have to send the token to the server to verify it
                    // and then we can set the session
                    setSession(JSON.stringify(authData));
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.error('Google sign in error:', error);
            return false;
        }
    };
    const signIn = (email: string, password: string) => {
        // Dummy validation
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
                signInWithGoogle,
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

