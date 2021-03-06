export interface PokeApiListResponse {
    pokemon_entries: Array<{
        entry_number: number,
        pokemon_species: {
            name: string
        }
    }>;
}


export interface PokeApiInfoResponse {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    weight: number,
    sprites: {
        front_default: string,
    };
    abilities: Array<{
        slot: number,
        ability: {
            name: string,
        }
    }>;
    moves: 
        Array<{
            move: {
                name: string,
            }
        }>
    ;

    stats: Array<{
        base_stat: number,
        effort: number,
        stat:{
            name: string,
        }
    } >;

}