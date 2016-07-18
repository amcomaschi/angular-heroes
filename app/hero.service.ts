/**
 * Created by ariel on 16/07/16.
 */
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero'

@Injectable()
export class HeroService {

    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 3000) // 3 seconds
        );
    }

}
