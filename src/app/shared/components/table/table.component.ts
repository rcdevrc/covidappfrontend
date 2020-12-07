import { Component, OnInit, Input,ViewChild, ElementRef, AfterViewInit,AfterViewChecked,ChangeDetectionStrategy } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { defaultLocaleWeekdays } from 'ngx-bootstrap/chronos/locale/locale.class';

interface IViewtrackingInfo{
  fromFirstName : string;
  toFirstName : string;
  toEmailId : string;
  fromEmailId : string;
  office : string;
  date:string;
}

@Component({
  changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,AfterViewInit,AfterViewChecked {
  @ViewChild(DatatableComponent,{static:false}) table: DatatableComponent;
  @ViewChild('searchInputElement',{static:false}) searchInput: ElementRef;
  @Input() searchBy:string;
  @Input() rows:any[];
  @Input() cols:any[];
  temp: any[] = [];
  full: any[] = [];
  colNumbers:number;
  @Input() searchableProperty:string;

  callOnce=false;

  
  constructor() {
      console.log("Table's constructor called!");
  }

  ngOnInit(){

   // this.temp =[localStorage.getItem("tabledata")]; // [...this.rows];

    console.log("Table's ngOnInit called!");
    this.temp = [...this.rows];
    this.full = [...this.rows];
    console.log("in ngOninit in table: rows = "+this.rows);
    console.log("in ngOninit in table: temp = "+this.temp);

  }
  ngAfterViewInit(){

    console.log("Table's ngAfterViewInit called!");

    console.log("in ngAfterViewInit in table: rows = "+this.rows);
    console.log("searchBy initial value:"+this.searchBy.length);
    if(this.searchBy.length != 0 ){
      console.log("table component is : "+this.searchBy);
     ((document.getElementById('searchBoxForTable') as HTMLInputElement).value = this.searchBy);
     let event = new KeyboardEvent('keyup',{'bubbles':true});
      this.searchInput.nativeElement.dispatchEvent(event);
      this.searchBy = "";

    }

  }

  ngAfterViewChecked(){
    //console.log("Table's ngAfterViewChecked called!");

   // console.log("in ngAfterViewChecked in table: temp = "+this.temp);
    //console.log("in ngAfterViewChecked in table: full = "+this.full);
    //console.log("in ngAfterViewChecked in table: rows = "+this.rows);
    //this.temp =[...localStorage.getItem("tabledata")];//[...this.rows];

    if(!this.callOnce&&this.rows.length>0) {
      this.temp = [...this.rows];
      this.callOnce=true;
    }
    
   // alert(this.temp);

  }


  // filters results
filterDatatable(event){
  let val = event.target.value.toLowerCase().trim();
  //this.temp =[...this.full];
  console.log("event value: "+event.target.value.toLowerCase());

  if(!val){
    this.rows = [...this.temp];
  }
  // get the value of the key pressed and make it lowercase
  
  console.log("localStorage: "+localStorage.getItem("searchFlag"));

  if(localStorage.getItem("searchFlag") !== null && localStorage.getItem("searchFlag") !== undefined){
    if(localStorage.getItem("searchFlag").length>0)
    {
      console.log("in if statement rows: "+this.rows);
     // val= localStorage.getItem("searchFlag");
      localStorage.removeItem("searchFlag");
      
       //localStorage.setItem("searchFlag","");
       
    }
   
  }
     
  // get the amount of columns in the table
  let colsAmt = 0; 
  colsAmt = this.cols.length;
  // get the key names of each column in the dataset
  console.log("temp: "+this.temp[0]);
  let keys = Object.keys(this.temp[0]);
  
  console.log("keys: "+keys);this.temp
  // assign filtered matches to the active datatable
  this.rows = this.temp.filter(function(item){
  //let temp = this.temp.filter(function(item){
  console.log("item: "+item);
    // iterate through each row's column data
    for (let i=0; i<colsAmt; i++){
      // check for a match
      console.log("in loop");
      item[keys[i]]=item[keys[i]]+"";
      if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
        // found match, return true to add to result set
        console.log("val: "+val);
        console.log("keys[i]: "+keys[i].toString().toLowerCase());
        console.log("found");
        
        return true;
      }
    }
  });
  //this.rows = this.temp;
  // whenever the filter changes, always go back to the first page
  this.table.offset = 0;

  //this.rows = this.temp;
}
  


}
