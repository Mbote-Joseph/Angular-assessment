import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Code03pate2748Component } from './code03pate2748.component';

describe('Code03pate2748Component', () => {
  let component: Code03pate2748Component;
  let fixture: ComponentFixture<Code03pate2748Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Code03pate2748Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Code03pate2748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
