import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
  ],
  exports: [
    TranslateModule,
    MatCardModule,
    CommonModule
  ]
})
export class SharedModule { }
