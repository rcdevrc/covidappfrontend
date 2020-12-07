import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../user.service';

@Component({
  selector: 'app-infocards',
  templateUrl: './infocards.component.html',
  styleUrls: ['./infocards.component.scss']
})
export class InfocardsComponent implements OnInit {

  feelGood;
  covid;
  isLoading=true;

  constructor(private user:UserService) {

    this.user.getDashBoardData().subscribe(data=>{

     this.feelGood=data.feelingGood;
     this.covid=data.totalPostive;    
     this.isLoading=false;

        });

   }

  ngOnInit(): void {
  }


}
