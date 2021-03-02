import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Pokemon } from './pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  configUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
  //https://pokeapi.co/api/v2/pokemon/ditto
  constructor(private http: HttpClient) { 
    
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.configUrl);
  }
}
