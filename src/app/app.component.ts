import { Component, OnInit } from '@angular/core';
import {Hero} from './hero'

import { HeroService } from './hero.service'

//copy & paste to mock-heroes
//const HEROES: Hero[] = [
//  { id: 11, name: 'jang'},
// { id: 12, name: 'park'},
//  { id: 13, name: 'yoo'},
//  { id: 14, name: 'kwon'},
//];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  constructor(private heroservice : HeroService){}


    title = 'my heroes';
    heroes : Hero[];
    selectedHero: Hero;
    onSelect(hero:Hero) : void {
    this.selectedHero = hero;
    }
ngOnInit() : void {
  this.heroservice.getHeroes()
  .then(result => this.heroes = result);  
}

}


