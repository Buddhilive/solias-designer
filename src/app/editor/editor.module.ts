import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { CanvasComponent } from './canvas/canvas.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    CanvasComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    ButtonModule
  ]
})
export class EditorModule { }
