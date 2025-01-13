import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export const useSettingsStyles = () => {
    const theme = useColorScheme() ?? 'dark';
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[theme].background,
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors[theme].tint,
            paddingHorizontal: 20,
            paddingTop: 60,
            paddingBottom: 20,
        },
        headerTitle: {
            fontSize: 20,
            fontWeight: '600',
            color: Colors[theme].background,
            marginLeft: 16,
        },
        content: {
            flex: 1,
            padding: 20,
            paddingBottom: 40,
        },
        avatarSection: {
            alignItems: 'center',
            marginBottom: 32,
        },
        avatar: {
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 16,
        },
        changePhotoButton: {
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 20,
            backgroundColor: `${Colors[theme].tint}1A`,
        },
        changePhotoText: {
            color: Colors[theme].tint,
            fontSize: 14,
            fontWeight: '500',
        },
        form: {
            flex: 1,
            marginBottom: 20,
        },
        inputGroup: {
            marginBottom: 24,
        },
        label: {
            fontSize: 14,
            fontWeight: '500',
            color: Colors[theme].text,
            marginBottom: 8,
        },
        input: {
            backgroundColor: '#F5F5F5',
            borderRadius: 12,
            padding: 16,
            fontSize: 16,
            color: Colors[theme].text,
        },
        saveButton: {
            backgroundColor: Colors[theme].tint,
            borderRadius: 12,
            padding: 16,
            alignItems: 'center',
            marginTop: 8,
            marginBottom: 40,
        },
        saveButtonText: {
            color: Colors[theme].background,
            fontSize: 16,
            fontWeight: '600',
        },
        textArea: {
            height: 100,
            textAlignVertical: 'top',
            paddingTop: 12,
        },
        section: {
            marginBottom: 24,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: Colors[theme].text,
            marginBottom: 16,
        },
        settingItem: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: Colors[theme].background,
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
        },
        settingInfo: {
            flex: 1,
            marginRight: 16,
        },
        settingTitle: {
            fontSize: 16,
            fontWeight: '500',
            color: Colors[theme].text,
            marginBottom: 4,
        },
        settingDescription: {
            fontSize: 14,
            color: Colors[theme].icon,
        },
        menuItem: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors[theme].background,
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        searchSection: {
            marginBottom: 24,
        },
        searchTitle: {
            fontSize: 24,
            fontWeight: '600',
            color: Colors[theme].text,
            marginBottom: 8,
        },
        searchDescription: {
            fontSize: 16,
            color: Colors[theme].icon,
        },
        faqSection: {
            marginBottom: 24,
        },
        faqItem: {
            backgroundColor: Colors[theme].background,
            borderRadius: 12,
            marginBottom: 12,
            padding: 16,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        faqHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        faqQuestion: {
            fontSize: 16,
            fontWeight: '500',
            color: Colors[theme].text,
            flex: 1,
            marginRight: 16,
        },
        faqAnswer: {
            fontSize: 14,
            color: Colors[theme].icon,
            marginTop: 12,
            lineHeight: 20,
        },
        contactSection: {
            alignItems: 'center',
            padding: 24,
            marginTop: 12,
            paddingBottom: 40,
        },
        contactTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: Colors[theme].text,
            marginBottom: 16,
        },
        contactButton: {
            backgroundColor: Colors[theme].tint,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 12,
        },
        contactButtonText: {
            color: Colors[theme].background,
            fontSize: 16,
            fontWeight: '600',
        },
        contactHeader: {
            marginBottom: 32,
        },
        contactsTitle: {
            fontSize: 24,
            fontWeight: '600',
            color: Colors[theme].text,
            marginBottom: 8,
        },
        contactDescription: {
            fontSize: 16,
            color: Colors[theme].icon,
            lineHeight: 24,
        },
        contactInfo: {
            marginBottom: 32,
        },
        contactMethod: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
        },
        contactMethodText: {
            marginLeft: 16,
        },
        contactMethodTitle: {
            fontSize: 14,
            color: Colors[theme].icon,
            marginBottom: 4,
        },
        contactMethodValue: {
            fontSize: 16,
            color: Colors[theme].text,
            fontWeight: '500',
        },
        buttonDisabled: {
            opacity: 0.5,
        },


    });
};
