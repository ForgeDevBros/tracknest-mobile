import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export const useChatStyles = () => {
    const theme = useColorScheme() ?? 'dark';
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[theme].background,
        },
        header: {
            backgroundColor: Colors[theme].tint,
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
        },
        headerTitle: {
            paddingTop: 20,
            fontSize: 20,
            fontWeight: '600',
            color: Colors[theme].background,
            fontFamily: 'Alice',
        },
        chatContainer: {
            flex: 1,
            padding: 20,
        },
        messageContainer: {
            marginBottom: 16,
        },
        botMessage: {
            backgroundColor: Colors[theme].cardItem,
            padding: 16,
            borderRadius: 16,
            borderTopLeftRadius: 4,
            color: Colors[theme].text,
            maxWidth: '80%',
        },
        userMessage: {
            backgroundColor: Colors[theme].tint,
            padding: 16,
            borderRadius: 16,
            borderTopRightRadius: 4,
            color: Colors[theme].background,
            maxWidth: '80%',
            alignSelf: 'flex-end',
        },
        inputContainer: {
            flexDirection: 'row',
            padding: 16,
            backgroundColor: Colors[theme].cardItem,
            alignItems: 'center',
            gap: 12,
        },
        input: {
            flex: 1,
            minHeight: 40,
            maxHeight: 100,
            backgroundColor: Colors[theme].background,
            borderRadius: 20,
            paddingHorizontal: 16,
            paddingVertical: 8,
            color: Colors[theme].text,
        },
        sendButton: {
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
};
