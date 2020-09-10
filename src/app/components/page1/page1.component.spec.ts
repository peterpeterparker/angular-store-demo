import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Component } from './page1.component';

import store from '../../stores/clicks.store';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    store.dispose();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment', () => {
    component.inc();

    fixture.detectChanges();

    const paragraph = fixture.nativeElement.querySelector('p:first-of-type');

    expect(paragraph.textContent).toEqual('Counts: 1');
  });
});
