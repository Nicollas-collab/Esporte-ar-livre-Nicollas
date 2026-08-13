import { Routes } from '@angular/router';

import { HomeComponente } from './component/home-componente/home-componente';
import { AtletaComponente } from './component/atleta-componente/atleta-componente';

export const routes: Routes = [
{
    path:'',
    redirectTo:"/home",
    pathMatch: 'full'
},

{
    path: '/home',
    component:HomeComponente
},

{
    path:"cadastroatletla",
    component:AtletaComponente
}
];
