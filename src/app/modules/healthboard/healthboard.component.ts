import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../user.service';
interface IHealthBoardInfo{
    firstName : string;
    lastName : string;
    department : string;
    office : string;
    status : string;
    date:string;
}

@Component({
  selector: 'app-healthboard',
  templateUrl: './healthboard.component.html',
  styleUrls: ['./healthboard.component.scss']
})
export class HealthboardComponent implements OnInit {

  searchingKey : string = "firstName";
  feelingGooddata:IHealthBoardInfo[] = [];
  covidAffectedData :IHealthBoardInfo[] = [];
  isLoading:boolean=true;
  /*
    feelingGooddata = [
        {
            firstName: "Abid",
            lastName: "Khan",
            userPrincipalName: "abid.khan@royalcyber.com",
            mobilePhone: "343489384",
            department: "Research & Product Development",
            office: "Chicago",
            status: "Feeling Good",
            comments: "Healthy Person",
            date: "06-28-2020 17:24:00"
        },

        {
            firstName: "Yasir",
            lastName: "Aziz",
            userPrincipalName: "yasir.aziz@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Mobile Developer",
            office: "Chicago",
            status: "Feeling Good",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:14"
        },
        {
            firstName: "Abdul",
            lastName: "Jalil",
            userPrincipalName: "abdul.jalil@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Portal Solutions",
            office: "Chicago",
            status: "Feeling Good",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:29"
        },

        {
            firstName: "Frank",
            lastName: "Lampard",
            userPrincipalName: "frank.lampard@royalcyber.com",
            mobilePhone: "+923422988320",
            department: "Mobile Developer",
            office: "Chicago",
            status: "Feeling Good",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:14"
        },
        {
            firstName: "Kareem",
            lastName: "Khan",
            userPrincipalName: "kareem.khan@royalcyber.com",
            mobilePhone: "+923422988320",
            department: "Mobile Developer",
            office: "Chicago",
            status: "Feeling Good",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:14"
        },

        {
            firstName: "John",
            lastName: "Terry",
            userPrincipalName: "john.terry@royalcyber.com",
            mobilePhone: "+923422988320",
            department: "Mobile Developer",
            office: "Chicago",
            status: "Feeling Good",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:14"
        },

        {
            firstName: "Alex",
            lastName: "Mathews",
            userPrincipalName: "alex.mathews@royalcyber.com",
            mobilePhone: "+923422988320",
            department: "Mobile Developer",
            office: "Chicago",
            status: "Feeling Good",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:14"
        },

        {
            firstName: "Diego",
            lastName: "Costa",
            userPrincipalName: "diego.costa@royalcyber.com",
            mobilePhone: "+923422988320",
            department: "Mobile Developer",
            office: "Chicago",
            status: "Feeling Good",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:14"
        },

        {
            firstName: "Karim",
            lastName: "Benzema",
            userPrincipalName: "karim.benzema@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "UI/UX",
            office: "Chicago",
            status: "Feeling Good",
            comments: "Hshsus",
            date: "07-06-2020 14:36:02"
        },

        {
            firstName: "Aamir",
            lastName: "Aleem",
            userPrincipalName: "aamir.aleem@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "UI/UX",
            office: "Chicago",
            status: "Feeling Good",
            comments: "Hshsus",
            date: "07-06-2020 14:36:02"
        }
    ];
    */
    notfeelingGooddata = [
        {
            firstName: "Abdul",
            lastName: "Ahad",
            userPrincipalName: "abdul.ahad@royalcyber.com",
            mobilePhone: "343489384",
            department: "Research & Product Development",
            office: "Chicago",
            status: "Not Feeling Good",
            comments: "Healthy Person",
            date: "03-28-2020 17:24:00"
        },
        {
            firstName: "Zeeshan",
            lastName: "Ahmed",
            userPrincipalName: "zeeshan.ahmed@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Portal Solutions",
            office: "Chicago",
            status: "Not Feeling Good",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:14"
        },
        {
            firstName: "Aamir",
            lastName: "Shehzaad",
            userPrincipalName: "aamir.shehzaad@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "UI/UX",
            office: "Chicago",
            status: "Not Feeling Good",
            comments: "Hshhsshs",
            date: "07-04-2020 14:35:29"
        },
        {
            firstName: "Sergio",
            lastName: "Ramos",
            userPrincipalName: "sergio.ramos@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "UI/UX",
            office: "Chicago",
            status: "Not Feeling Good",
            comments: "Hshhsshs",
            date: "07-04-2020 14:35:29"
        },
        {
            firstName: "Antoine ",
            lastName: "Griezmann",
            userPrincipalName: "antoine.griezmann@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "UI/UX",
            office: "Chicago",
            status: "Not Feeling Good",
            comments: "Hshhsshs",
            date: "07-04-2020 14:35:29"
        },
        {
            firstName: "Toni",
            lastName: "Kroos",
            userPrincipalName: "toni.kroos@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "UI/UX",
            office: "Chicago",
            status: "Not Feeling Good",
            comments: "Hshhsshs",
            date: "07-04-2020 14:35:29"
        },
        {
            firstName: "Paul",
            lastName: "Pogba",
            userPrincipalName: "paul.Pogba@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "UI/UX",
            office: "Chicago",
            status: "Not Feeling Good",
            comments: "Hshhsshs",
            date: "07-04-2020 14:35:29"
        },
        {
            firstName: "Marco",
            lastName: "Asensio",
            userPrincipalName: "aarco.asensio@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "UI/UX",
            office: "Chicago",
            status: "Not Feeling Good",
            comments: "Hshhsshs",
            date: "07-04-2020 14:35:29"
        },
        {
            firstName: "Aamir",
            lastName: "Shehzaad",
            userPrincipalName: "aamir.shehzaad@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "UI/UX",
            office: "Chicago",
            status: "Not Feeling Good",
            comments: "Hshhsshs",
            date: "07-04-2020 14:35:29"
        },
        {
            firstName: "Ziyab",
            lastName: "Najeeb",
            userPrincipalName: "ziyab.najeeb@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "UI/UX",
            office: "Chicago",
            status: "Not Feeling Good",
            comments: "Hshsus",
            date: "02-02-2020 14:36:02"
        }
    ];
    /*
    covidAffectedData = [
        {
            firstName: "Swathin",
            lastName: "R",
            userPrincipalName: "swathin.r@royalcyber.com",
            mobilePhone: "343489384",
            department: "Research & Product Development",
            office: "Chicago",
            status: "Covid Affected",
            comments: "Healthy Person",
            date: "04-28-2020 17:24:00"
        },
        {
            firstName: "Srinivas",
            lastName: "Mahenderker",
            userPrincipalName: "srininvas@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Full Stack",
            office: "Chicago",
            status: "Covid Affected",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:14"
        },
        {
            firstName: "Abdul",
            lastName: "Baseer",
            userPrincipalName: "abdul.baseer@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Portal Solutions",
            office: "Chicago",
            status: "Covid Affected",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:29"
        },
        {
            firstName: "Nicholas",
            lastName: "Latifi",
            userPrincipalName: "nicholas.latifi@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Portal Solutions",
            office: "Chicago",
            status: "Covid Affected",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:29"
        },
        {
            firstName: "Carlos",
            lastName: "Sainz",
            userPrincipalName: "Carlos.sainz@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Portal Solutions",
            office: "Chicago",
            status: "Covid Affected",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:29"
        },
        {
            firstName: "Max",
            lastName: "Verstappen",
            userPrincipalName: "max.verstappen@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Portal Solutions",
            office: "Chicago",
            status: "Covid Affected",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:29"
        },
        {
            firstName: "Mark",
            lastName: "Valtteri",
            userPrincipalName: "mark.valtteri@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Portal Solutions",
            office: "Chicago",
            status: "Covid Affected",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:29"
        },
        {
            firstName: "Sebastian",
            lastName: "Mark",
            userPrincipalName: "sebastian.mark@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Portal Solutions",
            office: "Chicago",
            status: "Covid Affected",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:29"
        },
        {
            firstName: "Lewis",
            lastName: "Hamilton",
            userPrincipalName: "lewis.hamilton@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Portal Solutions",
            office: "Chicago",
            status: "Covid Affected",
            comments: "Hshhsshs",
            date: "07-06-2020 14:35:29"
        },
        {
            firstName: "Farhan",
            lastName: "Qadir",
            userPrincipalName: "farhan.qadir@royalcyber.com",
            mobilePhone: "+923422988332",
            department: "Research & Product Development",
            office: "Chicago",
            status: "Covid Affected",
            comments: "Hshsus",
            date: "07-06-2020 14:36:02"
        }
    ];
    */
columns = [
  { prop:  "firstName",name: "First Name", width:"207.833"},
  { prop:  "lastName",name: "Last Name" , width:"207.833"},
  { prop:  "department",name: "Department" , width:"207.833"},
  { prop:  "office",name: "Location" , width:"207.833"},
  { prop:  "date",name: "Date" , width:"207.833"},
  { prop:  "status",name: "Status" , width:"207.833"}
];

  constructor(private user:UserService) { 
   
    this.getHealthBoardData(1);
   // this.feelingGooddata =this.getHealthBoardData(1);
   // console.log("Feeling good");
  //  console.log(this.feelingGooddata);
}

  ngOnInit(): void {
  }

  
  getHealthBoardData(status){

    this.user.getHealthBoardData(status).subscribe(data => {
       // const viewtrackingArray: IViewtrackingInfo[] = [];
       console.log("The data is ");
       console.log(data);
       this.feelingGooddata= JSON.parse(data[0]);
       this.covidAffectedData=JSON.parse(data[1]);
       console.log("The table is ");
       localStorage.setItem("tabledata",this.data);
       this.isLoading=false;
      // console.log(this.tableData);
      //  localStorage.setItem("tabledata",this.data);       

    })

}
}
