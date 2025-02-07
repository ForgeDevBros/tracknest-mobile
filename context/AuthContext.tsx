import { createContext, useContext, useState, ReactNode, PropsWithChildren } from "react";
import { useStorageState } from "../hooks/useStorageState";
import { supabase } from "@/lib/supabase";
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri } from "expo-auth-session";


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
    const redirectTo = makeRedirectUri();
    const signInWithGoogle = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    scopes: 'openid profile email',
                    redirectTo,
                }
            });

            if (error) throw error;
            if (data?.url) {
                const result = await WebBrowser.openAuthSessionAsync(
                    data?.url ?? "",
                    redirectTo,
                    {
                        showInRecents: true,
                        createTask: true
                    }
                );
                if (result.type === 'success' && result.url) {
                    // Extract the access token from the URL
                    const params = new URLSearchParams(result.url.split('#')[1]);
                    const access_token = params.get('access_token');

                    if (access_token) {
                        // Set the session with the token
                        const { data: { user } } = await supabase.auth.getUser(access_token);

                        const minimalUserData = {
                            id: user?.id,
                            email: user?.email,
                            name: user?.user_metadata?.full_name,
                            avatar: user?.user_metadata?.avatar_url,
                            access_token
                        };

                        setSession(JSON.stringify({ session: minimalUserData }));
                        return true;
                    }
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

