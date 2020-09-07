import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 acno=""; //same name to be used while using ngModel
psw="";
acnoChange(event){
  // alert("changed")
this.acno=event.target.value;
// console.log(this.acno)

}
pswChange(event){
  this.psw=event.target.value;
}
  constructor(private router:Router,
    private dataService:DataService) { }  
  // dependancy injection

  ngOnInit(): void {
  }
  login(){
    // var acno=parseInt(this.acno);
    // var password=this.psw;
    // var acno=parseInt(abc.value);
    //  var password=def.value;
    var acno=parseInt(this.acno);
    var password=this.psw;
    try{
      if(isNaN(acno)) throw "enter a number"
      if(acno.toString().length<4) throw "length doesnt match"
    }
    catch(err){
      alert(err)

    }
    // alert(acno+","+password);
    var data=this.dataService.accountDetails;
  if(acno in data){
      var pwd=data[acno].password
      if(pwd==password){
          alert("login successfull")
          // window.location.href="homepage.html"
         this.router.navigateByUrl("dashboard")
      }
      else{
alert("incorrect username or password")
      }
  }
    else{
alert("user does not exist")
this.router.navigateByUrl("register")
    }
  }
  
}
