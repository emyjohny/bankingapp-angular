import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
return this.accountDetails[this.currentUser.acno].transactions;
  
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
    return this.http.post("http://localhost:3000/register",data)
  }
 
  
  login(acno1,password){
    var acno=parseInt(acno1);
   const data={
     acno,
     password
   }
    return this.http.post("http://localhost:3000/login",data)

    // if(acno in data){
    //   var pwd =data[acno].password
    //   if(pwd==password){
    //     this.currentUser=data[acno];
    //     this.saveDetails();
    // return true;
      }
  
  deposit(accnum,pin1,amount1){
    var pinnum=parseInt(pin1)
    var amount=Number(amount1)
    var data=this.accountDetails;
    if(accnum in data){
      let mpin=data[accnum].pin;
      if(mpin==pinnum){
         data[accnum].balance+=amount;
         data[accnum].transactions.push({
          amount:amount,
          type:"credit"
         })
         this.saveDetails();
         return {
           status:true,
           message:"amount credited",
           balance: data[accnum].balance
         }
         
      }
      else{
        return{
          status:false,
          message:"invalid cred",
        }
        
      }
  }

  }
  withdraw1(accnum,pin1,amount1){
    var pinnum=parseInt(pin1);
    var amount=Number(amount1); 
    var data=this.accountDetails;
    if(accnum in data){
      let mpin=data[accnum].pin;
      if(amount>data[accnum].balance){
        return{
          status:false,
          message:"insufficient balance",
          balance:data[accnum].balance
        }
      }
      else if(mpin==pinnum){
        
         data[accnum].balance-=amount;
         data[accnum].transactions.push({
           amount:amount,
           type:"Debit"
         })
         this.saveDetails();
         return{
          status:true,
          message:"account has been debited",
          balance:data[accnum].balance
        }
        }
        else{
          return{
            status:false,
            message:"invalid cred"
          }
        }
      }
  }
  }

