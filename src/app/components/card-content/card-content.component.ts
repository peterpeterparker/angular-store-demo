import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

import store from '../../stores/clicks.store';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContentComponent implements OnInit, OnDestroy {

  state$$ = store.state;

  private sub;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.sub = store.onChange('clicks', (value) => {
      console.log(value);
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub();
  }

}
