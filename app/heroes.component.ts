/**
 * Created by amcomaschi on 15/07/16.
 */
import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { OnInit } from '@angular/core';



@Component({
    selector: 'my-heroes',
    template:`
      <h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" 
            (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <my-hero-detail [hero]="selectedHero"></my-hero-detail>
      `,
    directives: [HeroDetailComponent],
    providers: [HeroService]

})

export class HeroesComponent implements OnInit {

    constructor(private heroService: HeroService) { }


    title = 'Tour of Heroes';
    heroes;

    selectedHero: Hero;

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    getHeroes() {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }


}