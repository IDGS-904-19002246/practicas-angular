import { Component } from '@angular/core';
import { ModModule } from './mod/mod.module';
@Component({
  selector: 'app-distancia2puntos',
  templateUrl: './distancia2puntos.component.html',
  styleUrls: ['./distancia2puntos.component.css']
})
export class Distancia2puntosComponent {
  x1!:number;
  x2!:number;

  y1!:number;
  y2!:number;
  fin!: number;

  tabla = []
  calcular(){
    // console.log(Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1,2)));
    
    this.fin = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1,2));
  }
}
