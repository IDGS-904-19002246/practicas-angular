import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { Distancia2puntosComponent } from "./distancia2puntos/distancia2puntos.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";

const routes:Routes=[
    {path:'',redirectTo:'/home', pathMatch:'full'},
    {path:'Cine',component:CinepolisComponent},
    {path:'Distancias',component:Distancia2puntosComponent},
    {path:'Resistencias',component:ResistenciasComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}