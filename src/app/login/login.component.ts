import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   accountDetails={
    1001:{name:"user1",acno:1001,pin:4387,password:"userone",balance:3000},
    1002:{name:"user2",acno:1002,pin:1234,password:"usertwo",balance:3000},
    1003:{name:"user3",acno:1003,pin:1235,password:"userthree",balance:3000},
    1004:{name:"user4",acno:1004,pin:1236,password:"userfour",balance:3000},
    1005:{name:"user5",acno:1005,pin:1237,password:"userfive",balance:3000},
}
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
  constructor() { }

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
    var data=this.accountDetails;
  if(acno in data){
      var pwd=data[acno].password
      if(pwd==password){
          alert("login successfull")
          window.location.href="homepage.html"
      }
      else{
alert("incorrect username or password")
      }
  }
    else{
alert("user does not exist")
    }
  }
  
}
