import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import store from '../../stores/clicks.store';

import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page1Component implements OnInit {

  state$$ = store.state;

  oneTimeValue: number;

  constructor() { }

  ngOnInit(): void {
    const sub = store.onChange('clicks', (value) => {
      this.oneTimeValue = value;

      sub();
    });
  }

  inc(): void {
    store.state.clicks++;
  }

}
