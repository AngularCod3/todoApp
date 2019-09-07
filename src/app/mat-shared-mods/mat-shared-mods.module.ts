import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    DragDropModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    DragDropModule,
    MatCheckboxModule
  ]
})
export class MatSharedModsModule { }
