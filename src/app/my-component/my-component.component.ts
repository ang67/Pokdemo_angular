import { Component, OnInit } from '@angular/core';
import { from, Observable, pipe, Subscription } from 'rxjs';
import { Pokemon } from '../pokemon';
import { FilterPokemonPipePipe } from '../pipes/filter-pokemon--pipe.pipe';
import { HttpClient } from '@angular/common/http';
import { PokeApiListResponse } from '../poke-api-list-response';
import { PokeApiService } from '../services/poke-api.service'
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [
    FilterPokemonPipePipe,
    //PokeApiService,
  ],
  //pipes: [FilterPokemonPipePipe]
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  searchString: string = '';
  pokemons: Pokemon[] = [];

  private pokeapiserviceSubscription: Subscription = new Subscription();

  constructor(private pokeapiservice: PokeApiService) { }

  ngOnInit() {
    this.pokeapiserviceSubscription = this.pokeapiservice.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

  valider(e: any) {
    console.log(e);
    this.pokeapiservice.getPokemonsInfos(e).subscribe(info => console.log(info));
    this.pokeapiservice.getPokemonsInfos(e).subscribe(info => console.log(info));
  }

  ngOnDestroy() {
    this.pokeapiserviceSubscription.unsubscribe();
  }
}
