import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared/shared.module';

import { CardComponent } from './card/card.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InternationalizationComponent } from './internationalization/internationalization.component';


@NgModule({
  declarations: [
    CardComponent,
    DropdownComponent,
    InternationalizationComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CardComponent,
  ]
})
export class PresentationModule { }
