import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app.material.module';

import { DynamicForm1Component } from './component/dynamic-form/dynamic-form1.component';
import { DynamicForm2Component } from './component/dynamic-form/dynamic-form2.component';
import { DynamicControlComponent } from './component/dynamic-control/dynamic-control.component';

@NgModule({
  declarations: [
    DynamicForm1Component,
    DynamicForm2Component,
    DynamicControlComponent
  ],
  exports: [
    DynamicForm1Component,
    DynamicForm2Component,
    DynamicControlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class DynamicComponentModuleModule { }
