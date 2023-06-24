import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,FormsModule,

    MatInputModule,MatIconModule,MatButtonModule,
    MatRadioModule,MatFormFieldModule,MatSelectModule
  ]
})
export class ModModule { }
