import { View, StyleSheet } from 'react-native';

import { Forageable } from '@/services/FetchForageablesService';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';


export type ForageableCardProps = {
    lightColor?: string;
    darkColor?: string;
    forageable: Forageable;
}

export function ForageableCard({
    forageable,
    lightColor,
    darkColor,
}: ForageableCardProps) {

    // TODO(austin.jones): how to use color scheme in themes
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <View style={styles.cardContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <ThemedText style={styles.cardText} type='subtitle'>
                        {forageable.name}
                    </ThemedText>

                    <ThemedText style={styles.cardText} type='defaultSemiBold'>
                        {forageable.class.toString()}
                    </ThemedText>
                </View>

                <ThemedText style={styles.cardText}>
                    Region: {forageable.region.toString()}
                </ThemedText>

                <ThemedText style={styles.cardText}>
                    Where to find: {forageable.location}
                </ThemedText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 5,
        borderRadius: 4,
        backgroundColor: Colors.dark.tint,
    },
    contentContainer: {
        margin: 5,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardText: {
        color: Colors.light.text,
    },
});

