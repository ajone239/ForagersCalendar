import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="chevron.left.forwardslash.chevron.right"
                    style={styles.headerImage}
                />
            }>

            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">What to forage now!</ThemedText>
            </ThemedView>

            <ThemedText>
                This screen will have a item view of current seasonal forageables.
            </ThemedText>

            <Collapsible title="Mushrooms">
                <ThemedText>
                    This screen will have a item view of current seasonal mushrooms.
                </ThemedText>
            </Collapsible>
            <Collapsible title="Fruit">
                <ThemedText>
                    This view will have a item view of current seasonal fruit.
                </ThemedText>
            </Collapsible>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
