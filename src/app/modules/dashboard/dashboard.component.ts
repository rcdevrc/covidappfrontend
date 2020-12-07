import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dDate: number = Date.now();
  fullName="dashBoard";
  thisMonthCovid=0;
  lastMonthCovid=0;
  feelingGoodCurrentMonth=0;
  feelingGoodLastMonth=0;

  constructor(private router: Router,private user:UserService) {

    this.getHealthBoardMonthStats();
    if(this.router.getCurrentNavigation().extras.state!=null) {
    //  console.log(this.router.getCurrentNavigation().extras.state.userdetail.firstName);
     // document.getElementById("fullName").innerText = this.router.getCurrentNavigation().extras.state.userdetail.firstName;
    }
  }

  ngOnInit(): void {}

  getHealthBoardMonthStats(){

    this.user.getDashBoardMonthStats().subscribe(data => {
       // const viewtrackingArray: IViewtrackingInfo[] = [];
        this.thisMonthCovid=data.thisMonthCovid;
        this.lastMonthCovid=data.lastMonthCovid;
        this.feelingGoodLastMonth=data.feelingGoodLastMonth;
        this.feelingGoodCurrentMonth=data.feelingGoodCurrentMonth;
      // console.log(this.tableData);
      //  localStorage.setItem("tabledata",this.data);       
    })
}
}
