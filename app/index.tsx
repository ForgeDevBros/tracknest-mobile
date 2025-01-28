import { Redirect } from 'expo-router';
import { useSession } from '@/context/AuthContext';
import { View, ActivityIndicator } from 'react-native';

export default function Index() {
    const { session, isLoading } = useSession() ?? {};

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (session) {
        return <Redirect href="/(tabs)" />;
    }

    return <Redirect href="/auth/login" />;
}
