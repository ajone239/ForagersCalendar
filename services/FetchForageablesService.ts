export class FetchForageablesService {

    async sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async loadForageables(): Promise<Forageable[]> {
        await this.sleep(5000);

        return forageables;
    }

}

export enum ForagableClass {
    Mushroom = "Mushroom",
    Fruit = "Fruit",
    Leaf = "Leaf",
    Stalk = "Stalk",
}

export enum Season {
    Summer = "Summer",
    Fall = "Fall",
    Winter = "Winter",
    Spring = "Spring",
}

export enum Region {
    SouthEast = "SouthEast",
}

export interface Forageable {
    name: string;
    class: ForagableClass;
    season: Season;
    region: Region;
    location: string;
}

const forageables: Forageable[] = [
    {
        name: "Chanterelle",
        class: ForagableClass.Mushroom,
        season: Season.Summer,
        region: Region.SouthEast,
        location: "Deciduous forests near oak trees",
    },
    {
        name: "Morel",
        class: ForagableClass.Mushroom,
        season: Season.Spring,
        region: Region.SouthEast,
        location: "Moist wooded areas and near dead trees",
    },
    {
        name: "Blackberry",
        class: ForagableClass.Fruit,
        season: Season.Summer,
        region: Region.SouthEast,
        location: "Sunny edges of forests and trails",
    },
    {
        name: "Persimmon",
        class: ForagableClass.Fruit,
        season: Season.Fall,
        region: Region.SouthEast,
        location: "Open fields or near wooded areas",
    },
    {
        name: "Pine Needles",
        class: ForagableClass.Leaf,
        season: Season.Winter,
        region: Region.SouthEast,
        location: "Pine forests and coniferous trees",
    },
    {
        name: "Wild Lettuce",
        class: ForagableClass.Leaf,
        season: Season.Spring,
        region: Region.SouthEast,
        location: "Shady and moist meadows",
    },
    {
        name: "Cattail",
        class: ForagableClass.Stalk,
        season: Season.Summer,
        region: Region.SouthEast,
        location: "Edges of ponds and wetlands",
    },
    {
        name: "Goldenrod",
        class: ForagableClass.Stalk,
        season: Season.Fall,
        region: Region.SouthEast,
        location: "Fields and open grassy areas",
    },
    {
        name: "Elderberry",
        class: ForagableClass.Fruit,
        season: Season.Summer,
        region: Region.SouthEast,
        location: "Lowland thickets and stream banks",
    },
    {
        name: "Reishi Mushroom",
        class: ForagableClass.Mushroom,
        season: Season.Fall,
        region: Region.SouthEast,
        location: "Base of hardwood trees, especially oaks",
    },
];

