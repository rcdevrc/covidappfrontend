import { Component, OnInit, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import {UserService} from '../../user.service';
import { NgxSpinnerService } from "ngx-spinner";


interface IViewtrackingInfo{
    fromFirstName : string;
    toFirstName : string;
    toEmailId : string;
    fromEmailId : string;
    office : string;
    date:string;
}
@Component({
  selector: 'app-viewtracking',
  templateUrl: './viewtracking.component.html',
  styleUrls: ['./viewtracking.component.scss']
})
export class ViewtrackingComponent implements OnInit,AfterViewInit {
  //@ViewChild(DatatableComponent,{static:false}) table:DatatableComponent;
  @ViewChild('tableComponent',{static:false}) tableComponent:ElementRef;
  searchKeyword:string = "";
  fullTrace = true;
  data:IViewtrackingInfo[] = [];
  isLoading=true;
  /*
  data = [
    {
      fromFirstName : "Aamir",
      //fromLastName : "Shahzad",
      fromEmailId : "aamirshahzad@royalcyber.com",
      //mobilePhone : "3453522576",
      //department : "UX/UI",
      
      toFirstName : "Abid",
      toEmailId : "abidkhan@royalcyber.com",
      
      //toLastName : "Khan",
      //comments : "Met with Abid",
      date : "06/30/2020",
      office : "Chicago",
      //time : ""
    },
    {
      fromFirstName : "Abdul",
      //fromLastName : "Baseer",
      fromEmailId : "abdulbaseer@royalcyber.com",
      //mobilePhone : "3453522576",
      //department : "UX/UI",
      toFirstName : "Abdul",
      //toLastName : "Ahad",
      toEmailId : "abdulahad@royalcyber.com",
      
      office : "Chicago",
      
      //comments : "Met with Abdul",
      date : "06/30/2020",
      //time : ""
    },
    {
      fromFirstName : "Murtaza",
     // fromLastName : "Halaai",
      fromEmailId : "murtazahalaai@royalcyber.com",
      //mobilePhone : "3453522576",
      //department : "UX/UI",
      
      
      toFirstName : "Muhammad",
      //toLastName : "Abbas",
      toEmailId : "abbas@royalcyber.com",
      //comments : "Met with Abbas",
      office : "Chicago",
      date : "02/30/2021",
      //time : ""
    },
    {
      fromFirstName : "Zeeshan",
      //fromLastName : "Ali",
      fromEmailId : "zeeshanali@royalcyber.com",
      //mobilePhone : "3453522576",
      //department : "UX/UI",
      
      toFirstName : "Aamir",
      toEmailId : "aamiraleem@royalcyber.com",
      
      //toLastName : "Aleem",
      //comments : "Met with Aamir",
      office : "Chicago",
      date : "09/18/2019",
      //time : ""
    },
    {
      fromFirstName : "Aamir",
      //fromLastName : "Aleem",
      fromEmailId : "aamiraleem@royalcyber.com",
      //mobilePhone : "3453522576",
      //department : "UX/UI",
      
      
      toFirstName : "Abid",
      //toLastName : "Khan",
      toEmailId : "abidkhan@royalcyber.com",
      
      //comments : "Met with Abid",
      office : "Chicago",
      date : "07/16/2020",
      //time : ""
    },

    {
      fromFirstName : "Mark",
      //fromLastName : "Valtteri",
      fromEmailId : "mark.valtteri@royalcyber.com",
      //mobilePhone : "3453522580",
      //department : "UX/UI",
      toFirstName : "Sebastian",
      toEmailId : "sebastianmark@royalcyber.com",
      // toLastName : "Mark",
      // comments : "Met with Sebastian",
      office : "Chicago",
      date : "07/16/2020",
      // time : ""
    },

    {
      fromFirstName : "Lewis",
      // fromLastName : "Hamilton",
      fromEmailId : "lewis.hamilton@royalcyber.com",
      // mobilePhone : "3453522581",
      // department : "UX/UI",
      toFirstName : "Carlos",

      toEmailId : "carlos.sainz@royalcyber.com",
      // toLastName : "Sainz",
      // comments : "Met with Carlos",
      office : "Chicago",

      date : "07/16/2020",
      // time : ""
    },
    {
      fromFirstName : "Nicholas",
      // fromLastName : "Latifi",
      fromEmailId : "nicholas.latifi@royalcyber.com",
      // mobilePhone : "3453522582",
      // department : "UX/UI",
      toFirstName : "Srinivas",

      toEmailId : "srinivas@royalcyber.com",
      // toLastName : "Mahenderker",
      // comments : "Met with Srinivas",
      office : "Chicago",

      date : "07/16/2020",
      // time : ""
    },

    {
      fromFirstName : "Swathin",
      // fromLastName : "R",
      fromEmailId : "swathin@royalcyber.com",
      // mobilePhone : "3453522583",
      // department : "UX/UI",
      toFirstName : "Abid",

      toEmailId : "abidkhan@royalcyber.com",
      // toLastName : "Khan",
      // comments : "Met with Abid",
      office : "Chicago",

      date : "07/16/2020",
      // time : ""
    },

    {
      fromFirstName : "Marco",
      // fromLastName : "Asensio",
      fromEmailId : "marcoasensio@royalcyber.com",
      // mobilePhone : "3453522576",
      // department : "UX/UI",
      toFirstName : "Paul",

      // toLastName : "Pogba",
      toEmailId : "Paul.Pogba@royalcyber.com",

      // comments : "Met with Pogba",
      office : "Chicago",

      date : "07/16/2020",
      // time : ""
    },
    {
      fromFirstName : "Abdul",
      // fromLastName : "Ahad",
      fromEmailId : "abdulahad@royalcyber.com",
      // mobilePhone : "3453522576",
      // department : "UX/UI",
      toFirstName : "Aamir",

      toEmailId : "aamirshehzad@royalcyber.com",
      // toLastName : "Shehzad",
      // comments : "Met with Aamir",
      office : "Chicago",

      date : "06/19/2020",
      // time : ""
    }
  ];
  */


  //unFilterData = [...this.data];
  columns = [

      { prop: "toFirstName", name:"To Name", width:"207.833"},
      { prop: "toEmailId", name: "To Email", width:"207.833"},
      { prop:  "fromFirstName",name: "From Name", width:"207.833"},
      { prop: "fromEmailId", name:"From Email", width:"207.833"},
      { prop: "office", name:"Location", width:"207.833"},
      { prop: "date", name:"Date", width:"207.833"},

  ];
  searchingKey:string = "fromFirstName";


  constructor(private router: Router,private user:UserService,private spinner: NgxSpinnerService) {
      console.log("Viewtracking Info constructor call.");

      console.log("OnRouting:");
      if(this.router.getCurrentNavigation().extras.state !== undefined){

          this.searchKeyword = this.router.getCurrentNavigation().extras.state.searchKeyword;
          localStorage.setItem("searchterm",this.searchKeyword);
          this.fullTrace=false;
          this.getUserTrace(this.searchKeyword);


      }
      console.log("search keyword: "+this.searchKeyword );

   }
  
  ngAfterViewInit(){
      console.log("Viewtracking Info ngAfterViewInit call.");
    if(this.fullTrace==true) {
        this.getFullTracing();
    }

  }
  

  ngOnInit() {
      console.log("Viewtracking Info ngOnInit call.");
      /*

      this.user.getAllTracing().subscribe(data => {
          const viewtrackingArray: IViewtrackingInfo[] = [];
          this.data = JSON.parse(data);

      });
*/
  }

  onSubmit(){
      console.log("Viewtracking Info onSubmit call.");

  }

  getFullTracing()
  {
      this.user.getAllTracing().subscribe(data => {
      const viewtrackingArray: IViewtrackingInfo[] = [];
      this.data = JSON.parse(data);
      localStorage.setItem("tabledata",this.data);
      this.isLoading=false;  
        })
  }

  getUserTrace(userId){

      this.user.getTrace(userId).subscribe(data => {
          const viewtrackingArray: IViewtrackingInfo[] = [];
          this.data = JSON.parse(data);
          localStorage.setItem("tabledata",this.data);
          this.isLoading=false;


      })

  }
}

