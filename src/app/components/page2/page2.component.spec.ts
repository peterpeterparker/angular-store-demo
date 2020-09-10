import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2Component } from './page2.component';
import {CardComponent} from '../card/card.component';

describe('Page2Component', () => {
  let component: Page2Component;
  let fixture: ComponentFixture<Page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2Component, CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
