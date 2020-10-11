import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name=""
  constructor(public dataService:DataService,private fb:FormBuilder) {
    this.name=localStorage.getItem("name");
   }

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
        const result=this.dataService.deposit(this.depositForm.value.accno,this.depositForm.value.pin,this.depositForm.value.amount)
        .subscribe((data:any)=>{
          alert(data.message);
      alert(data.balance) 
    // alert() 
        },(data)=>{
          alert(data.error.message);
        })

//     if(result.status==true){
//       alert(result.message);
//       alert(result.balance) 
//     }
// else{
// alert(result.message)
// }
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
 
    const result=this.dataService.withdraw1(this.withdrawForm.value.accno1,this.withdrawForm.value.pin1,this.withdrawForm.value.amount1)
    .subscribe((data:any)=>{
      console.log(data)
      alert(data.message);
    alert(data.balance) 
    },data=>{
      alert(data.error.message);
    })
//     if(result.status==true){
//       alert(result.message);
//       alert(result.balance) 
//     }
// else{
// alert(result.message)
// }
}}

