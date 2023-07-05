import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CinepolisComponent } from '../cinepolis.component';

@NgModule({
  declarations: [
    CinepolisComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    CinepolisComponent
  ]
})
export class CinepolisModule { }
