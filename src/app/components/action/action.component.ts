import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import store from '../../stores/clicks.store';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
  }

  inc(): void {
    store.state.clicks++;
  }

  show(): void {
    this.alertService.show();
  }

  reset(): void {
    store.reset();
  }

}
