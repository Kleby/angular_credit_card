import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { CardBackComponent } from './card-back/card-back.component';
import { CardFrontComponent } from './card-front/card-front.component';
import { FormComponent } from './form/form.component';
import { CompletedCardComponent } from './completed-card/completed-card.component';
import { ButtonComponent } from './button/button.component';

const importsComponents = [
  CardFrontComponent,
  CardBackComponent,
  FormComponent,
  CompletedCardComponent,
  ButtonComponent
]

@NgModule({
  declarations: importsComponents,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: importsComponents
})
export class ComponentsModule { }
