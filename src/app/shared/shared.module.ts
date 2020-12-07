import { NgxBoostrapModule } from './ngx-boostrap/ngx-boostrap.module';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { WidgetcardComponent } from './components/widgetcard/widgetcard.component';
import { VerticalbarComponent } from './widgets/verticalbar/verticalbar.component';
import { PiechartComponent } from './widgets/piechart/piechart.component';
import { CovidprogressComponent } from './widgets/covidprogress/covidprogress.component';
import { BroadcastComponent } from './widgets/broadcast/broadcast.component';
import { TableComponent } from './components/table/table.component';
import { MultiselectDropdownComponent } from './components/multiselect-dropdown/multiselectDropdown.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    WidgetcardComponent,
    VerticalbarComponent,
    PiechartComponent,
    CovidprogressComponent,
    BroadcastComponent,
    TableComponent,
    MultiselectDropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule,
    NgxBoostrapModule,
    NgxDatatableModule,
    FormsModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    WidgetcardComponent,
    VerticalbarComponent,
    PiechartComponent,
    CovidprogressComponent,
    BroadcastComponent,
    TableComponent,
    MultiselectDropdownComponent,
    FormsModule
  ],
})
export class SharedModule {}
