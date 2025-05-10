import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

//Injectable va permettre a ce service d'etre disponible sur l'ensemble de notre appli.
@Injectable({
  providedIn: 'root' //Indique à Angular qu'on veut utiliser la meme instance du service à travers toute l'application
})
export class PokemonService {

  constructor() { }

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }
  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }
  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Electrik', 
      'Poison', 
      'Fee', 
      'Vol', 
      'Combat', 
      'Psy'
    ]
  }
}
