import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponente } from './component/menu-componente/menu-componente';
import { AtletaComponente } from './component/atleta-componente/atleta-componente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponente, AtletaComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esporte_ar_livre');
}
