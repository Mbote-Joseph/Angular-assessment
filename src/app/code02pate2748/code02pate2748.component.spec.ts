import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Code02pate2748Component } from './code02pate2748.component';

describe('Code02pate2748Component', () => {
  let component: Code02pate2748Component;
  let fixture: ComponentFixture<Code02pate2748Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Code02pate2748Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Code02pate2748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
