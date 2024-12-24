import { View, StyleSheet } from 'react-native';
import { Forageable, Season } from "@/services/FetchForageablesService";
import { ThemedText } from './ThemedText';

export type CalendarRowProps = {
    forageable: Forageable;
}

export function CalendarTitleRow() {
    return (
        <View style={styles.rowContainer}>
            <View style={styles.nameContainer}></View>
            <View style={styles.headerCell}>
                <ThemedText>
                    Summer
                </ThemedText>
            </View>

            <View style={styles.headerCell} >
                <ThemedText>
                    Fall
                </ThemedText>
            </View>

            <View style={styles.headerCell} >
                <ThemedText>
                    Winter
                </ThemedText>
            </View>

            <View style={styles.headerCell} >
                <ThemedText>
                    Spring
                </ThemedText>
            </View >
        </View >
    );
}

export function CalendarRow({ forageable }: CalendarRowProps) {
    return (
        <View style={styles.rowContainer}>
            <View style={styles.nameContainer}>
                <ThemedText>
                    {forageable.name}
                </ThemedText>
            </View>
            <View style={(forageable.season == Season.Summer) ? styles.trueCell : styles.falseCell} />
            <View style={(forageable.season == Season.Fall) ? styles.trueCell : styles.falseCell} />
            <View style={(forageable.season == Season.Winter) ? styles.trueCell : styles.falseCell} />
            <View style={(forageable.season == Season.Spring) ? styles.trueCell : styles.falseCell} />
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameContainer: {
        textDecorationLine: 'underline',
        height: 30,
        width: 150,
    },
    trueCell: {
        backgroundColor: '#888',
        height: 30,
        width: 70,
    },
    falseCell: {
        backgroundColor: '#222',
        height: 30,
        width: 70,
    },
    headerCell: {
        height: 30,
        width: 70,
    },
});
