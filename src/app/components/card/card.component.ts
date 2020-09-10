import { Component } from '@angular/core';

import store from '../../stores/clicks.store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  state$$ = store.state;

}
