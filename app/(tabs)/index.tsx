import { Image, StyleSheet, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Forageable, FetchForageablesService } from '@/services/FetchForageablesService';
import { useEffect, useState } from 'react';
import { CalendarRow, CalendarTitleRow } from '@/components/CalendarRow';

export default function HomeScreen() {
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
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Forage Calendar</ThemedText>
                <HelloWave />
            </ThemedView>

            <CalendarTitleRow />

            {
                forageables !== null &&
                    forageables.length > 0 ? (
                    <FlatList
                        data={forageables}
                        renderItem={({ item }) =>
                            <CalendarRow forageable={item} />
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
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
