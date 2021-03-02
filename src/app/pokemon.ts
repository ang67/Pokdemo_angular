import { Injectable } from "@angular/core";

export class Pokemon {

    
    POKEMONS = [
        { id: 0, name: 'Pikachu' },
        { id: 1, name: 'Bulbizarre' },
        { id: 2, name: 'Florizarre' },
        { id: 3, name: 'Salamèche' },
        { id: 4, name: 'Carapuce' },
        { id: 5, name: 'Dracaufeu' },
    ];

    getPokemons() {
        return this.POKEMONS;
    }
}
