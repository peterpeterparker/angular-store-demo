import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
