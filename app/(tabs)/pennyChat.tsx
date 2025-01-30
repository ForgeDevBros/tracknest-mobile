import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { useChatStyles } from '@/styles/screens/chat.styles';
import { useState } from 'react';

export default function PennyChatScreen() {
    const theme = useColorScheme() ?? 'dark';
    const styles = useChatStyles();
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Penny, your financial assistant. How can I help you today?", isUser: false }
    ]);
    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { text: inputText, isUser: true }]);
            setInputText('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <IconSymbol name="chevron.left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Penny Chat</Text>
            </View>

            <ScrollView style={styles.chatContainer}>
                {messages.map((message, index) => (
                    <View key={index} style={styles.messageContainer}>
                        <Text style={message.isUser ? styles.userMessage : styles.botMessage}>
                            {message.text}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ask Penny anything..."
                    placeholderTextColor="#666"
                    multiline
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <IconSymbol name="arrow.up.circle.fill" size={32} color={Colors[theme].tint} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
