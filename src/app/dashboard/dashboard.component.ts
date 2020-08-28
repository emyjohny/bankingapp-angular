import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accountDetails={
    1001:{name:"user1",acno:1001,pin:4387,password:"userone",balance:3000},
    1002:{name:"user2",acno:1002,pin:1234,password:"usertwo",balance:3000},
    1003:{name:"user3",acno:1003,pin:1235,password:"userthree",balance:3000},
    1004:{name:"user4",acno:1004,pin:1236,password:"userfour",balance:3000},
    1005:{name:"user5",acno:1005,pin:1237,password:"userfive",balance:3000},
}

  constructor() { }

  ngOnInit(): void {
  }
  accno="";
  pin="";
  amount="";
  deposit(){
    var accnum=this.accno;
    var pinnum=this.pin;
    var amount=Number(this.amount);
var data=this.accountDetails;
if(accnum in data){
    let mpin=data[accnum].pin;
    if(mpin==pinnum){
       data[accnum].balance+=amount;
       alert("amount credited.final balance "+data[accnum].balance) 
    }
}

}

accno1="";
  pin1="";
  amount1="";
withdraw(){
    var accnum=this.accno1;
    var pinnum=this.pin1;
    var amount=Number(this.amount1); 
    var data=this.accountDetails;
if(accnum in data){
    let mpin=data[accnum].pin;
    if(mpin==pinnum){
       data[accnum].balance-=amount;
       alert("Rs."+amount+ " debited. final balance is "+data[accnum].balance) 
    }
}
}
}

