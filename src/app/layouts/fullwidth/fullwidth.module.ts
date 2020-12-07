import { NgxBoostrapModule } from './../../shared/ngx-boostrap/ngx-boostrap.module';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './../../modules/login/login.component';
import { FullwidthComponent } from './fullwidth.component';
import {Router} from '@angular/router';

@NgModule({
  declarations: [FullwidthComponent, LoginComponent],
  imports: [CommonModule, RouterModule, NgxBoostrapModule, SharedModule],
})
export class FullwidthModule {}
