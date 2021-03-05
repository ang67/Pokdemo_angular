import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeApiListResponse } from '../poke-api-list-response';
import { Pokemon } from '../pokemon';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  pokemonListUrlUrl = 'http://pokeapi.co/api/v2/pokedex/1';
  constructor(private _httpClient: HttpClient) { }

  getPokemons() {
    return this._httpClient.get<PokeApiListResponse>(this.pokemonListUrlUrl)
      .pipe(map(pokeApiListResponse => {

        const pokemonList = pokeApiListResponse.pokemon_entries
          .map(group => new Pokemon(group.entry_number, group.pokemon_species.name));

        return pokemonList;

      }));
  }

}

// getPokemons(): Observable<PokeApiListResponse> {
  //   this.pokeapiservice.getPokemons()
  //   .subscribe(PokeApiListResponse => { 
  //     this.pokemons = PokeApiListResponse.pokemon_entries.map(group => new Pokemon(group.entry_number,  group.pokemon_species.name))
  //   });
  // }