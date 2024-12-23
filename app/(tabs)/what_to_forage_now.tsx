import { FlatList, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Forageable, FetchForageablesService } from '@/services/FetchForageablesService';
import { useEffect, useState } from 'react';

export default function TabTwoScreen() {
    const [forageables, setForageables] = useState<Forageable[] | null>(null);

    const fetchForageableService = new FetchForageablesService();

    const fetchData = async () => {
        var data = await fetchForageableService.loadForageables();
        setForageables(data)
    }

    useEffect(
        () => { fetchData() },
        []
    );

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

            <Collapsible title="Mushrooms">
                <ThemedText>
                    This screen will have a item view of current seasonal mushrooms.
                </ThemedText>
            </Collapsible>

            {
                forageables !== null &&
                    forageables.length > 0 ? (
                    <FlatList
                        data={forageables}
                        renderItem={({ item }) =>
                            <ThemedText>
                                {item.name}
                            </ThemedText>
                        }
                    />
                ) : (
                    <ThemedText>
                        There's no data yet!
                    </ThemedText>
                )
            }

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
