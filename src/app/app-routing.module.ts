import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Page1Component} from './components/page1/page1.component';
import {Page2Component} from './components/page2/page2.component';

const routes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page1-component', component: Page1Component },
  { path: 'page2-component', component: Page2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
