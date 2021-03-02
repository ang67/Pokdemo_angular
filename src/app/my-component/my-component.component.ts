import { Component, OnInit } from '@angular/core';
import { from, pipe } from 'rxjs';
import { Pokemon } from '../pokemon';
import { FilterPokemonPipePipe } from '../filter-pokemon--pipe.pipe';
import { PokeApiService } from '../poke-api-service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [Pokemon,
    FilterPokemonPipePipe,
    PokeApiService
  ],
  //pipes: [FilterPokemonPipePipe]
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  searchString: string = '';
  pokemons;
  constructor(private _pokemons: Pokemon) {
    this.pokemons = _pokemons.getPokemons()
  }

  ngOnInit() { }

  valider(e:any) {
    console.log(e);
  }


}
