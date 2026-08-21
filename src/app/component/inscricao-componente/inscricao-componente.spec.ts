import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoComponente } from './inscricao-componente';

describe('InscricaoComponente', () => {
  let component: InscricaoComponente;
  let fixture: ComponentFixture<InscricaoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscricaoComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(InscricaoComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
