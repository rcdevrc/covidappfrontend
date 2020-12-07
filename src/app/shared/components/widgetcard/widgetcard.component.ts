import { VerticalbarComponent } from './../../widgets/verticalbar/verticalbar.component';
import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-widgetcard',
  templateUrl: './widgetcard.component.html',
  styleUrls: ['./widgetcard.component.scss'],
})
export class WidgetcardComponent implements OnInit, AfterContentInit {
  @ContentChild(VerticalbarComponent)
  verticalbarComponent: VerticalbarComponent;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    console.log(this.verticalbarComponent);
  }
}
