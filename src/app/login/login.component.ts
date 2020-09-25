import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    psw:['',[Validators.required]]
  })
  loginError(field){
    return (this.loginForm.get(field).touched||this.loginForm.get(field).dirty)&&this.loginForm.get(field).errors
  }

  constructor(private router:Router,
    private dataService:DataService,private fb:FormBuilder) { }  

  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.valid) {
      const result = this.dataService.login(this.loginForm.value.acno,this.loginForm.value.psw)
      .subscribe((data:any)=>{
        if (data) {
          localStorage.setItem("name",data.name)
          alert("Login successful");
          this.router.navigateByUrl("dashboard")
        }
      },(data)=>{
        alert(data.error.message);
      })
      
      // else {
      //   alert("invalid credentials")
      // }
    }
    else {
      alert("Form is invalid")
      // this.router.navigateByUrl("register")
    }

  }
}
