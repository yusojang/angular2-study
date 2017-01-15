import { Component } from '@angular/core';

export class Hero{
  id : number;
  name : string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'jang'},
  { id: 12, name: 'park'},
  { id: 13, name: 'yoo'},
  { id: 14, name: 'kwon'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero:Hero) : void {
    this.selectedHero = hero;
  }
}


