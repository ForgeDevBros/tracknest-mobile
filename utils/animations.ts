import { Animated, PanResponder } from 'react-native';
import { router } from 'expo-router';

export const createPanResponder = (pan: Animated.ValueXY) => {
    return PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {
            if (gesture.dx > 0) {
                Animated.event([null, { dx: pan.x }], {
                    useNativeDriver: false,
                })(_, gesture);
            }
        },
        onPanResponderRelease: (_, gesture) => {
            if (gesture.dx > 100 || gesture.vx > 0.5) {
                Animated.timing(pan, {
                    toValue: { x: 500, y: 0 },
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => router.back());
            } else {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true,
                    tension: 50,
                    friction: 7,
                }).start();
            }
        },
    });
};
