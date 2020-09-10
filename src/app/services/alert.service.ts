import { Injectable } from '@angular/core';

import store from '../stores/clicks.store';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  show(): void {
    alert(`Clicks: ${store.state.clicks}`);
  }
}
