import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
const options ={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails={
    1001:{name:"user1",acno:1001,pin:4387,password:"userone",balance:3000,transactions:[]},
    1002:{name:"user2",acno:1002,pin:1234,password:"usertwo",balance:3000,transactions:[]},
    1003:{name:"user3",acno:1003,pin:1235,password:"userthree",balance:3000,transactions:[]},
    1004:{name:"user4",acno:1004,pin:1236,password:"userfour",balance:3000,transactions:[]},
    1005:{name:"user5",acno:1005,pin:1237,password:"userfive",balance:3000,transactions:[]},
}
currentUser;
  constructor(private http:HttpClient) {
    this.getDetails()
   }
  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }}
  getTransactions(){
    return this.http.get(environment.apiUrl+"/transactions",options)
return this.accountDetails[this.currentUser.acno].transactions;
  
  }
  deleteTransaction(id){
    return this.http.delete(environment.apiUrl+"/transactions/"+id ,options)
  }
  getDetails(){
    if(localStorage.getItem("accountDetails")){
      this.accountDetails=JSON.parse(localStorage.getItem("accountDetails"));
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    }
   }
  register(name,acno,pin,password){
    const data={
      name,
      acno,
      pin,
      password,
      balance:0,
      transactions:[]
    }
    return this.http.post(environment.apiUrl+"/register",data)
  }
 
  
  login(acno1,password){
    var acno=parseInt(acno1);
   const data={
     acno,
     password
   }
    return this.http.post(environment.apiUrl+"/login",data,options)

    
      }
  
  deposit(acno,pin1,amount1){
    var pin=parseInt(pin1)
    var amount=Number(amount1)
 
    const data ={
      acno,
      pin,
      amount
    }
    return this.http.post(environment.apiUrl+"/deposit",data,options)

  }
  withdraw1(acno,pin1,amount1){
    var pin=parseInt(pin1);
    var amount=Number(amount1); 
    const data ={
      acno,
      pin,
      amount
    }
   return this.http.post(environment.apiUrl+"/withdraw",data,options)

  
   }
  }

