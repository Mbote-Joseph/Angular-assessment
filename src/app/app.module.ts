import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Code01pate2748Component } from './code01pate2748/code01pate2748.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Code02pate2748Component } from './code02pate2748/code02pate2748.component';
import { Code03pate2748Component } from './code03pate2748/code03pate2748.component';
import { Code04pate2748Component } from './code04pate2748/code04pate2748.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    Code01pate2748Component,
    Code02pate2748Component,
    Code03pate2748Component,
    Code04pate2748Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
