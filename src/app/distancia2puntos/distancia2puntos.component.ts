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

  calcular(){
    // // OPCIÓN 1
    // console.log(
    //   Math.sqrt(((this.x2 - this.x1)**2 ) + ((this.y2 - this.y1)**2))
    //   );
    // // OPCIÓN 2
    // var X = (this.x2 - this.x1)*(this.x2 - this.x1)
    // var Y = (this.y2 - this.y1)*(this.y2 - this.y1)
    // console.log(Math.sqrt((X+Y)));

    // OPCIÓN 3 (LA QUE YO USE 7W7)
    console.log(Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1,2)));
    this.fin = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1,2));

  }
}
