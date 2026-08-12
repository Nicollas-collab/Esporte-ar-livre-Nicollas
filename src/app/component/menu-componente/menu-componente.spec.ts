import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponente } from './menu-componente';

describe('MenuComponente', () => {
  let component: MenuComponente;
  let fixture: ComponentFixture<MenuComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
