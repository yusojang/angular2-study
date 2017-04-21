import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes'


@Injectable()
export class HeroService {

  constructor() { }
  getHero(id: number) : Promise {
    
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes() : Promise {

    return Promise.resolve(HEROES);
  }

}
