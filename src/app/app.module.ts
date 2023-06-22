import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Distancia2puntosComponent } from './distancia2puntos/distancia2puntos.component';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModModule } from './distancia2puntos/mod/mod.module';

@NgModule({
  declarations: [
    AppComponent,
    Distancia2puntosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    ModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
