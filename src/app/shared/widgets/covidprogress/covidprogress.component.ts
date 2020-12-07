import { Component, OnInit } from '@angular/core';
import {UserService} from  "../../../user.service";
@Component({
  selector: 'app-widget-covidprogress',
  templateUrl: './covidprogress.component.html',
  styleUrls: ['./covidprogress.component.scss'],
})
export class CovidprogressComponent implements OnInit {
  constructor(private user:UserService) {
    this.getDashBoardStatsProgress();
  }

  newCasesProgress="width: 10%"
  totalCovidProgress="width: 10%"
  totalCovid=0;
  newCases=0;
  ngOnInit(): void {}

  getDashBoardStatsProgress(){

    this.user.getDashBoardCovidprogress().subscribe(data => {

       this.totalCovidProgress="width: "+data.totalCovid+"%";
       this.newCasesProgress="width: "+data.newCases+"%";
       this.totalCovid=data.totalCovid+"%";
       this.newCases=data.newCases+"%";

    })

}
}
