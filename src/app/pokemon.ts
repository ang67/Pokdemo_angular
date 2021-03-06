export class Pokemon {
    id?: number;
    name?: string;
    base_experience?: number;
    height?: number;
    weight?: number;
    abilities?: Array<{}>;
    moves?: string[];
    stats?: Array<{}>;
    image?: string;

    constructor(id?: number, name?: string, base_experience?: number, height?: number, weight?: number,
        abilities?: Array<{}>, moves?: string[], stats?: Array<{}>, image?: string
    ) {
        this.id = id;
        this.name = name;
        this.base_experience = base_experience;
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
        this.moves = moves;
        this.stats = stats;
        this.image = image;

    }

}

