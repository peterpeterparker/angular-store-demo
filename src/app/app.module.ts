import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { CardComponent } from './components/card/card.component';
import { ActionComponent } from './components/action/action.component';
import { CardContentComponent } from './components/card-content/card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    CardComponent,
    ActionComponent,
    CardContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
