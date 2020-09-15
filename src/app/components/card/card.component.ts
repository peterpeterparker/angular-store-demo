import {ChangeDetectionStrategy, Component} from '@angular/core';

import store from '../../stores/clicks.store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

}
