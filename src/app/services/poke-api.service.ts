import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeApiListResponse, PokeApiInfoResponse } from '../poke-api-list-response';
import { Pokemon } from '../pokemon';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  pokemonListUrl = 'http://pokeapi.co/api/v2/pokedex/1';
  pokemonListUrlBase = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private _httpClient: HttpClient) { }

  getPokemons() {
    return this._httpClient.get<PokeApiListResponse>(this.pokemonListUrl)
      .pipe(map(pokeApiListResponse => {

        const pokemonList = pokeApiListResponse.pokemon_entries
          .map(group => new Pokemon(group.entry_number, group.pokemon_species.name));

        return pokemonList;

      }));
  }

  getPokemonsInfos(id : number) {
    return this._httpClient.get<PokeApiInfoResponse>(this.pokemonListUrlBase+id)
      .pipe(map(pokeApiInfoResponse => {

        const pokemonInfo = new Pokemon(
          pokeApiInfoResponse.id,
          pokeApiInfoResponse.name,
          pokeApiInfoResponse.base_experience,
          pokeApiInfoResponse.height,
          pokeApiInfoResponse.weight,
          pokeApiInfoResponse.abilities.map(item => ({ability: item.ability.name, slot: item.slot})),
          pokeApiInfoResponse.moves.map(item => item.move.name),
          pokeApiInfoResponse.stats.map(item => ({base_stat : item.base_stat,
          effort: item.effort,
          stat: item.stat.name})),
          pokeApiInfoResponse.sprites.front_default
        );
        return pokemonInfo;

      }));
  }

}

  /**
   * 
   * const pokemonInfo = {
          id : pokeApiInfoResponse.id,
          name: pokeApiInfoResponse.name,
          base_experience: pokeApiInfoResponse.base_experience,
          height: pokeApiInfoResponse.height,
          weight: pokeApiInfoResponse.weight,
          abilities: pokeApiInfoResponse.abilities.map(item => ({ability: item.ability.name, slot: item.slot})),
          moves: pokeApiInfoResponse.moves.map(item => item.move.name),
          stats: pokeApiInfoResponse.stats.map(item => ({base_stat : item.base_stat,
            effort: item.effort,
          stat: item.stat.name})),
          image: pokeApiInfoResponse.sprites.front_default
        };
   */