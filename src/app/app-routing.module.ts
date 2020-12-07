import { ManageAssociatesComponent } from './modules/manage-associates/manage-associates.component';
import { LoginComponent } from './modules/login/login.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { ViewtrackingComponent } from './modules/viewtracking/viewtracking.component';
import { BroadcastComponent } from './modules/broadcast/broadcast.component';
import { HealthboardComponent } from './modules/healthboard/healthboard.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FullwidthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'healthboard',
        component: HealthboardComponent,
      },
      {
        path: 'broadcast',
        component: BroadcastComponent,
      },
      {
        path: 'viewtrack',
        component: ViewtrackingComponent,
      },
      {
        path: 'manage-associates',
        component: ManageAssociatesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
