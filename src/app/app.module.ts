import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Distancia2puntosComponent } from './distancia2puntos/distancia2puntos.component';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { ModModule } from './distancia2puntos/mod/mod.module';
// import { ResistenciasComponent } from './resistencias/resistencias.component';
import { ModResModule } from './resistencias/mod-res/mod-res.module';
import { CinepolisComponent } from './cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    Distancia2puntosComponent,
    // ResistenciasComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
        
    ModModule,
    ModResModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
