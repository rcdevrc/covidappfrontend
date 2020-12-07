import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(searchData:{searchedString:string}){
      console.log("value got from searchbox in defauld layout is : "+searchData.searchedString);
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      }
      this.router.onSameUrlNavigation = 'reload';
  
      this.router.navigate(['/manage-associates'], { state: {searchKeyword:searchData.searchedString.trim().replace(/\s/g, "")}});
  }

}
