import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Code01pate2748Component } from './code01pate2748.component';

describe('Code01pate2748Component', () => {
  let component: Code01pate2748Component;
  let fixture: ComponentFixture<Code01pate2748Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Code01pate2748Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Code01pate2748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
