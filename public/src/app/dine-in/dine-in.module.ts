import { NgModule  , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../shared/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import{  DineinRoutingModule ,routingComponents} from './dinein-routing.module'


@NgModule({
  declarations: [routingComponents ],
  imports: [
    DineinRoutingModule,
    CommonModule,
    FormsModule,
    PipesModule
  ]
})
export class DineInModule { }
