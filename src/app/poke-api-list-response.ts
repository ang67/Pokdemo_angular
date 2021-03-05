export interface PokeApiListResponse {
    pokemon_entries: Array<{
        entry_number: number,
        pokemon_species: {
            name: string
        }
    }>;
}