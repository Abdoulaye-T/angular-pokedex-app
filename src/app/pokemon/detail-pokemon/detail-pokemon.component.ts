import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";

import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  imports: [ 
    CommonModule,
    PokemonTypeColorPipe
   ],
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemonList!: Pokemon[];
  pokemon: Pokemon|undefined;
  
  //Ici j'ai injecté le service ActivatedRoute via mon constructeur
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id'); //Je recupère l'ID contenu dans l'url
    if(pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons'])
  }
}

