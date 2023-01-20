import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoListarComponent } from './tecnico-listar.component';

describe('TecnicoListarComponent', () => {
  let component: TecnicoListarComponent;
  let fixture: ComponentFixture<TecnicoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
