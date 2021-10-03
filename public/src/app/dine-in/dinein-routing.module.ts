import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DineInComponent } from './dine-in.component';

const routes: Routes = [{
  path:'', component:  DineInComponent,
  children: [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'menu', loadChildren: () => import('../menu/menu.module').then(mod => mod.MenuModule)},
  ], runGuardsAndResolvers: 'always',
}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class DineinRoutingModule { }

export const routingComponents = [DineInComponent]