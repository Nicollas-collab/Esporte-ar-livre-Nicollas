import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaComponente } from './atleta-componente';

describe('AtletaComponente', () => {
  let component: AtletaComponente;
  let fixture: ComponentFixture<AtletaComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtletaComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(AtletaComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
