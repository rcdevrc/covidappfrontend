import { Component,Input, OnInit } from '@angular/core';
import { IMultiSelectOption,IMultiSelectSettings } from 'angular-2-dropdown-multiselect';


@Component({
    selector: 'app-multiselect',
    templateUrl: './multiselectDropdown.component.html',
    styleUrls: ['./multiselectDropdown.component.scss']
  })

  export class MultiselectDropdownComponent implements OnInit{
      @Input() dropdownOptions:IMultiSelectOption[];
      //optionsModel:string[];

      mySettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle:  'glyphicon',
        buttonClasses: 'btn btn-light rounded',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true
    };
      constructor(){

      }
      ngOnInit(){}

  }