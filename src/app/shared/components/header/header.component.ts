import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  globalSearchValue = '';
  @Output() searchValueEmit = new EventEmitter<{searchedString: string}>();

  fullName=localStorage.getItem("fullname");
  constructor(private router: Router) {

    if(this.router.getCurrentNavigation().extras.state !== undefined && this.router.getCurrentNavigation().extras.state.userdetail!== undefined ) {

        console.log(this.router.getCurrentNavigation().extras.state);
        this.fullName = this.router.getCurrentNavigation().extras.state.userdetail.firstName;
        localStorage.setItem("fullname", this.fullName);

    }

  }

  ngOnInit(): void {
  }
  
  getSearchValue(){

    console.log("Clicked:");
    //this.searchValue = ((document.getElementById('globalSearch') as HTMLInputElement).value);
    //console.log(this.searchValue);

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';


    //if(this.router.url!="/manage-associates")
        //this.router.navigate(['/manage-associates'], { state: {searchKeyword:this.searchValue.replace(/\s/g, "")}});
        this.router.navigate(['/manage-associates'], { state: {searchKeyword:this.globalSearchValue.trim().replace(/\s/g, "")}});

  }
  
  onSearchClick(){

    if(this.globalSearchValue.trim().length>0)
    {
        this.searchValueEmit.emit({
          searchedString: this.globalSearchValue
        });
      }
  }
}
