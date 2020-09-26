import { Component, OnInit } from '@angular/core';

import store from '../../stores/clicks.store';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  state$$ = store;

  oneTimeValue: number;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {

    // This feature does not work with state as a simple object
    // It could be implemented on the plain object with simple setters which trigger the `onChange`
    // But as soon as you need that kind of observable state, I would go with a Subject (RxJs)

    // const sub = store.onChange('clicks', value => {
    //   this.oneTimeValue = value;
    //
    //   sub();
    // });
  }

  inc(): void {
    store.clicks++;
  }

  show(): void {
    this.alertService.show();
  }

  reset(): void {
    store.reset();
  }
}
