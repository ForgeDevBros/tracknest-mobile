import { View, Text, Pressable, Modal, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { usePreferenceStyles } from '@/styles/component/preference.styles';

type PreferenceModalProps = {
    visible: boolean;
    title: string;
    options: string[];
    selectedValue: string;
    onSelect: (value: string) => void;
    onClose: () => void;
};

export function PreferenceModal({ visible, title, options, selectedValue, onSelect, onClose }: PreferenceModalProps) {
    const styles = usePreferenceStyles();
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    {options.map((option) => (
                        <Pressable
                            key={option}
                            style={styles.optionItem}
                            onPress={() => {
                                onSelect(option);
                                onClose();
                            }}
                        >
                            <Text style={[
                                styles.optionText,
                                selectedValue === option && styles.selectedOptionText
                            ]}>{option}</Text>
                        </Pressable>
                    ))}
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}


