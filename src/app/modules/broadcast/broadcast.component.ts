import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption,IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss']
})
export class BroadcastComponent implements OnInit {
  visibleGroup:boolean = false;
  visibleManual:boolean = false;

  groupOptions = [
      { id:1, name: 'RC Karachi'},
      { id:2, name: 'RC Chennai'},
      { id:3, name: 'RC Banglore'},
      { id:4, name: 'RC USA'},
      { id:5, name: 'RC Canada'}
  ];
  manualOptions = [
    { id: 'aamir.shehzad@royalcyber.com', name:'aamir.shehzad@royalcyber.com'},
    { id: 'aamir.aleem@royalyber.com', name: 'aamir.aleem@royalyber.com'},
    { id: 'abdul.ahad@royalcyber.com', name:'abdul.ahad@royalcyber.com'},
    { id: 'zeeshan.ahmed@royalcyber.com', name:'zeeshan.ahmed@royalcyber.com'}
  ];
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle:  'glyphicon',
    buttonClasses: 'btn btn-light rounded',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
};
  constructor() { }

  ngOnInit(): void {
    // this.groupOptions = [
    //   { id:1, name: 'RC Karachi'},
    //   { id:2, name: 'RC Chennai'},
    //   { id:3, name: 'RC Banglore'},
    //   { id:4, name: 'RC USA'},
    //   { id:5, name: 'RC Canada'}
    // ];
    // this.manualOptions = [
    //   { id: 'aamir.shehzad@royalcyber.com', name:'aamir.shehzad@royalcyber.com'},
    //   { id: 'aamir.aleem@royalyber.com', name: 'aamir.aleem@royalyber.com'},
    //   { id: 'abdul.ahad@royalcyber.com', name:'abdul.ahad@royalcyber.com'},
    //   { id: 'zeeshan.ahmed@royalcyber.com', name:'zeeshan.ahmed@royalcyber.com'}

    // ];
  }
  
  toggleGroupSelect(){
    this.visibleGroup= !this.visibleGroup;
    this.visibleManual = false;
  }
  toggleManualSelect(){
    this.visibleGroup = false;
    this.visibleManual = !this.visibleManual;
  }
  onSubmit(){
    
  }
}
