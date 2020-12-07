import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../user.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-manage-associates',
  templateUrl: './manage-associates.component.html',
  styleUrls: ['./manage-associates.component.scss'],
})
export class ManageAssociatesComponent implements OnInit,AfterViewInit {
  searchingKey: string = 'firstName';
  feelingGooddata = [
    {
      firstName: 'Abid',
      lastName: 'Khan',
      userPrincipalName: 'abidkhan@royalcyber.com',
      mobilePhone: '343489384',
      department: 'Research & Product Development',
      office: 'Karachi',
      status: 'Feeling Good',
      comments: 'Healthy Person',
      date: '06-28-2020 17:24:00',
    },
    {
      firstName: 'Yasir',
      lastName: 'Aziz',
      userPrincipalName: 'yasiraziz@royalcyber.com',
      mobilePhone: '+923422988332',
      department: 'Mobile Developer',
      office: 'Karachi',
      status: 'Feeling Good',
      comments: 'Hshhsshs',
      date: '07-06-2020 14:35:14',
    },
    {
      firstName: 'Abdul',
      lastName: 'Jalil',
      userPrincipalName: 'abduljalil@royalcyber.com',
      mobilePhone: '+923422988332',
      department: 'Portal Solutions',
      office: 'Karachi',
      status: 'Feeling Good',
      comments: 'Hshhsshs',
      date: '07-06-2020 14:35:29',
    },
    {
      firstName: 'Aamir',
      lastName: 'Aleem',
      userPrincipalName: 'aamiraleem@royalcyber.com',
      mobilePhone: '+923422988332',
      department: 'UI/UX',
      office: 'Karachi',
      status: 'Feeling Good',
      comments: 'Hshsus',
      date: '07-06-2020 14:36:02',
    },
  ];

  columns = [
    { prop: 'firstName', name: 'First Name' },
    { prop: 'lastName', name: 'Last Name' },
    { prop: 'department', name: 'Department' },
    { prop: 'office', name: 'Location' },
    { prop: 'date', name: 'Date & Time' },
    { prop: 'status', name: 'Status' },
  ];

    manageEmp = [
        {
            fromFirstName : "AobSdHslash_replacementOTUCl1MKpa1AaJaL5TPeqcUBABGplus_replacementNZnuY5ynfAZftLjZI5ae6ey0ZlzjhH1V8qBwRtzLCXLtzUP0KChRkCPJqbqfLolLo1MR11R8E5Bqouojef1laE4PbA34U7IGyMo7SWs1PBslash_replacementTOgY0Sfbm67LFBXQyeUF2CMrrj880=",
            fromLastName : "Shahzad",
            fromEmailId : "aamirshahzad@royalcyber.com",
            mobilePhone : "3453522576",
            department : "UX/UI",
            office : "Chicago",
            date : "06/30/2020",
            status:'3',
            time : ""
        },
        {
            fromFirstName : "userId-2",
            fromLastName : "Khan",
            fromEmailId : "abidkhan@royalcyber.com",
            mobilePhone : "3453522579",
            department : "Research & Product Development",
            office : "Chicago",
            date : "06/30/2020",
            status:'3',
            time : ""
        },
        {
            fromFirstName : "userId-3",
            fromLastName : "Baseer",
            fromEmailId : "abdulbaseer@royalcyber.com",
            mobilePhone : "3453522576",
            department : "Portal Solutions",
            office : "Chicago",
            date : "06/30/2020",
            status:'1',
            time : ""
        },
        {
            fromFirstName : "userId-4",
            fromLastName : "Ahad",
            fromEmailId : "abdulahad@royalcyber.com",
            mobilePhone : "3453522576",
            department : "UX/UI",
            office : "Chicago",
            date : "06/30/2020",
            status:'2',
            time : ""
        },
        {
            fromFirstName : "userId-5",
            fromLastName : "Halaai",
            fromEmailId : "murtazahalaai@royalcyber.com",
            mobilePhone : "3453522576",
            department : "UX/UI",
            office : "Chicago",
            date : "02/30/2021",
            status:'4',
            time : ""
        },
        {
            fromFirstName : "userId-6",
            fromLastName : "Abbas",
            fromEmailId : "abbas@royalcyber.com",
            mobilePhone : "3453522576",
            department : "UX/UI",
            office : "Chicago",
            date : "02/30/2021",
            status:'1',
            time : ""
        },
        {
            fromFirstName : "userId-7",
            fromLastName : "Ali",
            fromEmailId : "zeeshanali@royalcyber.com",
            mobilePhone : "3453522576",
            department : "UX/UI",
            office : "Chicago",
            date : "09/18/2019",
            status:'4',
            time : ""
        },
        {
            fromFirstName : "userId-8",
            fromLastName : "Aleem",
            fromEmailId : "aamiraleem@royalcyber.com",
            mobilePhone : "3453522576",
            department : "UX/UI",
            office : "Chicago",
            date : "07/16/2020",
            status:'3',
            time : ""
        },

        {
            fromFirstName : "userId-9",
            fromLastName : "Valtteri",
            fromEmailId : "mark.valtteri@royalcyber.com",
            mobilePhone : "3453522580",
            department : "UX/UI",
            office : "Chicago",
            date : "07/16/2020",
            status:'2',
            time : ""
        },
        {
            fromFirstName : "Sebastian",
            fromLastName : "Mark",
            fromEmailId : "sebastianmark@royalcyber.com",
            mobilePhone : "3453522580",
            department : "UX/UI",
            office : "Chicago",
            date : "07/16/2020",
            status:'2',
            time : ""
        },

        {
            fromFirstName : "Lewis",
            fromLastName : "Hamilton",
            fromEmailId : "lewis.hamilton@royalcyber.com",
            mobilePhone : "3453522581",
            department : "UX/UI",
            office : "Chicago",
            date : "07/16/2020",
            status:'1',
            time : ""
        },

        {
            fromFirstName : "Carlos",
            fromLastName : "Sainz",
            fromEmailId : "carlos.sainz@royalcyber.com",
            mobilePhone : "3453522581",
            department : "UX/UI",
            office : "Chicago",
            date : "07/16/2020",
            status:'3',
            time : ""
        },
        {
            fromFirstName : "Nicholas",
            fromLastName : "Latifi",
            fromEmailId : "nicholas.latifi@royalcyber.com",
            mobilePhone : "3453522582",
            department : "Portal Solutions",
            office : "Chicago",
            date : "07/16/2020",
            status:'2',
            time : ""
        },
        {
            fromFirstName : "Srinivas",
            fromLastName : "Mahenderker",
            fromEmailId : "srinivas@royalcyber.com",
            mobilePhone : "3453522582",
            department : "Full Stack",
            office : "Chicago",
            date : "07/16/2020",
            status:'1',
            time : ""
        },

        {
            fromFirstName : "Swathin",
            fromLastName : "R",
            fromEmailId : "swathin@royalcyber.com",
            mobilePhone : "3453522583",
            department : "UX/UI",
            office : "Chicago",
            date : "07/16/2020",
            status:'1',
            time : ""
        },

        {
            fromFirstName : "Marco",
            fromLastName : "Asensio",
            fromEmailId : "marcoasensio@royalcyber.com",
            mobilePhone : "3453522576",
            department : "UX/UI",
            office : "Chicago",
            date : "07/16/2020",
            status:'3',
            time : ""
        },
        {
            fromFirstName : "Paul",
            fromLastName : "Pogba",
            fromEmailId : "Paul.Pogba@royalcyber.com",
            mobilePhone : "3453522576",
            department : "Portal Solutions",
            office : "Chicago",
            date : "07/16/2020",
            status:'3',
            time : ""
        },

        {
            fromFirstName : "Aamir",
            fromLastName : "Shehzad",
            fromEmailId : "aamirshehzad@royalcyber.com",
            mobilePhone : "3453522576",
            department : "UX/UI",
            office : "Chicago",
            date : "06/19/2020",
            status:'2',
            time : ""
        }
    ];

    
  searchingKeyVar:string = "fromFirstName";
  associateName:string="";
  associateDepartment:string="";
  comments:string="";
  status=0;
  location:string="";
  date:string="";
  show;
  isLoading:boolean=false;
  constructor(private router: Router,private user:UserService,private spinner: NgxSpinnerService) {
    console.log("OnRouting:");
      //this.spinner.show();
      this.isLoading=true;
    if(this.router.getCurrentNavigation().extras.state !== undefined){

      var checkExist = setInterval(function() {

        if (document.getElementById("manage-link")!=null) {
            clearInterval(checkExist);
             document.getElementById("manage-link").click();

        }
        console.log("in method");
      }, 100);

      this.searchingKeyVar = this.router.getCurrentNavigation().extras.state.searchKeyword;
       var i=0;
       /*
      for(var result of this.manageEmp){
        console.log(" emails "+this.manageEmp[i].fromEmailId.toLowerCase());
        if(this.manageEmp[i].fromFirstName.toLowerCase( ).indexOf(this.searchingKeyVar.toLowerCase( ))  >= 0||this.manageEmp[i].fromLastName.toLowerCase( ).indexOf(this.searchingKeyVar.toLowerCase( ))  >= 0 || this.manageEmp[i].fromEmailId.indexOf(this.searchingKeyVar.toLowerCase( ))  >= 0)
        {

            this.user.getData(this.manageEmp[i].fromFirstName).subscribe(data=>{
                this.comments=data.recommendation.toString();
                this.show=data.tracing;
                if(data.infected==true)
                    this.status=3;
                else
                    this.status=1;

             this.location=this.office;


                  });
          this.associateName=(this.manageEmp[i].fromFirstName)+" "+(this.manageEmp[i].fromLastName);
          this.associateDepartment=(this.manageEmp[i].department);
       //   this.location=(this.manageEmp[i].office);
          this.date=(this.manageEmp[i].date);






          break;
        }

        //  return this.users.user[i].userDetail;

        i++;
      }
      */

     this.user.getData(this.searchingKeyVar).subscribe(data=>{

      this.isLoading=false;
      if(data.userExist==true)
      {
      //this.comments=data.recommendation.toString();
      this.show=data.tracing;
      this.associateName=this.searchingKeyVar;
      this.date=data.date;
      if(data.infected==true)
          this.status=3;
      else
          this.status=1;

      this.location="Chicago";
      }

        });
    }
    else
    this.isLoading=false;

  }

  ngOnInit(): void {
      console.log("calling spinner"+this.spinner);
      this.spinner.show();
      console.log("in ngOnInit");
      
  }
  


  gotoDetail()
  {
    localStorage.setItem("searchFlag",this.searchingKeyVar);
    this.router.navigate(['/viewtrack'], { state: { searchKeyword:this.searchingKeyVar}});

  }


}

