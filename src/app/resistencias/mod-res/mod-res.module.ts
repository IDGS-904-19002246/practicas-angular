import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ResistenciasComponent } from '../resistencias.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ResistenciasComponent 
  ],
  exports: [
    ResistenciasComponent 
  ],
  providers: []
})
export class ModResModule { }
