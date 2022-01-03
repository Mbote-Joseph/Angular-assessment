import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Code04pate2748Component } from './code04pate2748.component';

describe('Code04pate2748Component', () => {
  let component: Code04pate2748Component;
  let fixture: ComponentFixture<Code04pate2748Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Code04pate2748Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Code04pate2748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
