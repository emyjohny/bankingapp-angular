import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  depositForm=this.fb.group({
    accno:['',[Validators.required,Validators.minLength(4)]],
    pin:['',[Validators.required]],
    amount:['',[Validators.required]]
  })
 depositError(field){
   return (this.depositForm.get(field).touched||this.depositForm.get(field).dirty)&&this.depositForm.get(field).errors
 }
  deposit(){
    var accnum=this.depositForm.value.accno;
    var pinnum=this.depositForm.value.pin;
    var amount=Number(this.depositForm.value.amount);
var data=this.dataService.accountDetails;
if(accnum in data){
    let mpin=data[accnum].pin;
    if(mpin==pinnum){
       data[accnum].balance+=amount;
       alert("amount credited.final balance "+data[accnum].balance) 
    }
}

}

withdrawForm=this.fb.group({
  accno1:['',[Validators.required]],
  pin1:['',[Validators.required]],
  amount1:['',[Validators.required]]
})
withdrawError(field){
  return (this.withdrawForm.get(field).touched||this.withdrawForm.get(field).dirty)&&this.withdrawForm.get(field).errors
}

withdraw(){
    var accnum=this.withdrawForm.value.accno1;
    var pinnum=this.withdrawForm.value.pin1;
    var amount=Number(this.withdrawForm.value.amount1); 
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

