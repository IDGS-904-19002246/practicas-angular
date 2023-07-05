import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  formData = {
    Name: '',
    NPeople: '',
    CreditCard: 'No',
    NTickets: ''
  };
  // <li>No mas de 7 boletos por persona</li>
  // <li>2 boletos o menos no tienen descuento</li>
  // <li>3, 4 y 5 boletos == 10% descuento</li>
  // <li>Más de 5 boletos == 15% descuento</li>
  // <li>Pagos hechos con tarjeta == 10% descuento</li>
  end!: number;
  Calcular(formulario: NgForm){
    // console.log(formulario.value.Name);
    alert('Los pagos con Tarjeta te dan 10% de descuento, ')
    if (formulario.value.NTickets >= formulario.value.NPeople*7) {
      alert('No se permiten más de 7 boletos por persona')
    }else{
      
      var fin = formulario.value.NTickets * 12
      if (formulario.value.NTickets == 3 || formulario.value.NTickets == 4 || formulario.value.NTickets == 5) {
        fin = fin * 0.9
      }else if(formulario.value.NTickets >5){
        fin = fin * 0.85
      }

      if (formulario.value.CreditCard == 'Si') {
        fin = fin * 0.9
      }
      this.end = fin;
    }

    
  }
}
