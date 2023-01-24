import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemUpdateComponent } from './ordem-update.component';

describe('OrdemUpdateComponent', () => {
  let component: OrdemUpdateComponent;
  let fixture: ComponentFixture<OrdemUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
