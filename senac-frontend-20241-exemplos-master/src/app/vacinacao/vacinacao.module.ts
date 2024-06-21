import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinacaoRoutingModule } from './vacinacao-routing.module';
import { VacinacaoDetalheComponent } from './vacinacao-detalhe/vacinacao-detalhe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VacinacaoDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VacinacaoRoutingModule
  ]
})
export class VacinacaoModule { }
