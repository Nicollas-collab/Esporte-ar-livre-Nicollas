import { Routes } from '@angular/router';

import { HomeComponente } from './component/home-componente/home-componente';
import { AtletaComponente } from './component/atleta-componente/atleta-componente';
import { AtletaListaComponent } from './component/atleta-lista-component/atleta-lista-component';
import { CorridaComponent } from './component/corrida-component/corrida-component';
import { CorridaListaComponente } from './component/corrida-lista-componente/corrida-lista-componente';
export const routes: Routes = [
    {
        path: '',
        redirectTo: "/home",
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: HomeComponente
    },

    {
        path: "cadastroatleta",
        component: AtletaComponente
    },

    {
        path:"listaatleta",
        component:AtletaListaComponent
    },
    {
        path:"cadastrocorrida",
        component:AtletaComponente
    },
    {
        path: "alteracorrida/:id",
        component:CorridaListaComponente
    },
    {
        path:"cadastracorrida",
        component:CorridaComponent
    },
    {
        path:"listacorrida",
        component:CorridaListaComponente
    }


];


