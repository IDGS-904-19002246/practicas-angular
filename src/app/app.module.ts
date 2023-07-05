import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Distancia2puntosComponent } from './distancia2puntos/distancia2puntos.component';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { ModModule } from './distancia2puntos/mod/mod.module';
// import { ResistenciasComponent } from './resistencias/resistencias.component';
import { ModResModule } from './resistencias/mod-res/mod-res.module';
import { CinepolisModule } from './cinepolis/cinepolis/cinepolis.module';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent,
    Distancia2puntosComponent,

    MenuComponent
    // ResistenciasComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
        
    ModModule,
    ModResModule,
    CinepolisModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
