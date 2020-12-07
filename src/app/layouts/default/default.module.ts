import { NgxBoostrapModule } from './../../shared/ngx-boostrap/ngx-boostrap.module';
import { InfocardsComponent } from './../../modules/dashboard/infocards/infocards.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { ReportsComponent } from './../../modules/reports/reports.component';
import { ViewtrackingComponent } from './../../modules/viewtracking/viewtracking.component';
import { BroadcastComponent } from './../../modules/broadcast/broadcast.component';
import { HealthboardComponent } from './../../modules/healthboard/healthboard.component';
import { ManageAssociatesComponent } from './../../modules/manage-associates/manage-associates.component';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    HealthboardComponent,
    ManageAssociatesComponent,
    BroadcastComponent,
    ViewtrackingComponent,
    ReportsComponent,
    InfocardsComponent,
  ],
  imports: [CommonModule, RouterModule, NgxBoostrapModule, SharedModule],
})
export class DefaultModule {}
