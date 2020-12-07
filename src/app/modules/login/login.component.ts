
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailInputVal = '';
  passwordInputVal = '';
  constructor(private router: Router,private user:UserService) {
      
      this.user.getTrace("userId-2").subscribe(data=>{
          // alert(data);
      })
  }

  ngOnInit(): void {
  }

 users={
    user:[{
        userCredential: {
          email: "mas@royalcyber.com",
          password: "passw0rd"
        },
        userDetail: {
          firstName: "Mustafa",
          lastName: "Peshawarwala"
        }
 },{
        userCredential: {
            email: "alex@royalcyber.com",
            password: "passw0rd"
        },
        userDetail: {
            firstName: "Alex",
            lastName: "John"
        }
    }]
  }
    login() {

   var index=this.checkCred(this.emailInputVal,this.passwordInputVal);
    
    if(index!=-1)
    {
        this.router.navigate(['/dashboard'], { state: { userdetail:this.users.user[index].userDetail}});
    }



  }
  
  checkCred(email,password)
  {
      var i=0;

      for(var result of this.users.user){

       if(this.users.user[i].userCredential.email==email &&this.users.user[i].userCredential.password==password )
         return i;
         //  return this.users.user[i].userDetail;

       i++;
      }
      return -1;
  }
}
