import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../shared/pipes/pipes.module';

const ROUTES:Routes=[{ path: '', component: MenuComponent}];

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild(ROUTES) ,
  ]
})
export class MenuModule { }
