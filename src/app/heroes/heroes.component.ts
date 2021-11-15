import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[]= [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  hero: Hero = {
    id : 1, 
    name : 'Morgana'
  };

  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log(hero);
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
