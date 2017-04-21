import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
    constructor(private heroservice : HeroService){}

    title = 'Tour of heroes';
    heroes: Hero[];
    selectedHero : Hero;

  onSelect(hero: Hero) : void {
     this.selectedHero = hero;
  }
//promise 하나도 모르겠다
ngOnInit(): void {
  this.heroservice.getHeroes().then(result => this.heroes =result);
}


}
 
