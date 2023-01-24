import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCriarComponent } from './ordem-criar.component';

describe('OrdemCriarComponent', () => {
  let component: OrdemCriarComponent;
  let fixture: ComponentFixture<OrdemCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemCriarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
