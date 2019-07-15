import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PruebaLlamadaPage } from './prueba-llamada.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaLlamadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PruebaLlamadaPage]
})
export class PruebaLlamadaPageModule {}
