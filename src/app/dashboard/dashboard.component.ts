import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  accno="";
  pin="";
  amount="";
  deposit(){
    var accnum=this.accno;
    var pinnum=this.pin;
    var amount=Number(this.amount);
var data=this.dataService.accountDetails;
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
    var data=this.dataService.accountDetails;
if(accnum in data){
    let mpin=data[accnum].pin;
    if(mpin==pinnum){
       data[accnum].balance-=amount;
       alert("Rs."+amount+ " debited. final balance is "+data[accnum].balance) 
    }
}
}
}

