import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemDeleteComponent } from './ordem-delete.component';

describe('OrdemDeleteComponent', () => {
  let component: OrdemDeleteComponent;
  let fixture: ComponentFixture<OrdemDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
