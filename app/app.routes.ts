/**
 * Created by ariel on 18/07/16.
 */
import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';

const routes: RouterConfig = [
    {
        path: 'heroes',
        component: HeroesComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
