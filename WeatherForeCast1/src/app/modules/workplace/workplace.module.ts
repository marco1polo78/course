import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { WeatherpanelComponent } from './components/weatherpanel/weatherpanel.component';
import { WorkplaceComponent } from './components/workplace/workplace.component';

import {MatSlideToggleModule} from '@angular/material/';

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  declarations: [MenuComponent, WeatherpanelComponent, WorkplaceComponent,MenuComponent],
  exports: [WorkplaceComponent]
})
export class WorkplaceModule { }
