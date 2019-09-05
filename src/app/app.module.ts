import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PhaserModule } from 'phaser-component-library';
import { BaloteraComponent } from './balotera/balotera.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BaloteraComponent
  ],
  imports: [
    BrowserModule, NgbModule, PhaserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
