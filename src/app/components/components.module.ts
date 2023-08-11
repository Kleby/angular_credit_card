import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardBackComponent } from './card-back/card-back.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { CompletedCardComponent } from './completed-card/completed-card.component';

const importsComponents = [
  CardComponent,
  CardBackComponent,
  FormComponent,
  CompletedCardComponent
]

@NgModule({
  declarations: importsComponents,
  imports: [
    CommonModule
  ],
  exports: importsComponents
})
export class ComponentsModule { }
