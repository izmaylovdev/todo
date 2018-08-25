import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatCardModule,
  MatListModule
} from '@angular/material';

const MODULES = [
  MatToolbarModule,
  MatCardModule,
  MatListModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [...MODULES]
})
export class MaterialModule { }
