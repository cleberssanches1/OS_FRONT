import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemListarComponent } from './ordem-listar.component';

describe('OrdemListarComponent', () => {
  let component: OrdemListarComponent;
  let fixture: ComponentFixture<OrdemListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
