import { Colors } from "@/constants/Colors";
import { useColorScheme, StyleSheet } from "react-native";

export const usePreferenceStyles = () => {
    const theme = useColorScheme() ?? 'dark';

    return StyleSheet.create({
        modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'flex-end',
        },
        modalContent: {
            backgroundColor: Colors[theme].background,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
        },
        modalTitle: {
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 20,
            textAlign: 'center',
            color: Colors[theme].text,
        },
        optionItem: {
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#F5F5F5',
        },
        optionText: {
            fontSize: 16,
            color: Colors[theme].text,
        },
        selectedOptionText: {
            color: Colors[theme].tint,
            fontWeight: '600',
        },
        closeButton: {
            marginTop: 20,
            padding: 16,
            backgroundColor: Colors[theme].tint,
            borderRadius: 12,
            alignItems: 'center',
        },
        closeButtonText: {
            color: Colors[theme].background,
            fontSize: 16,
            fontWeight: '600',
        },
    });
};