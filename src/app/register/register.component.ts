import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    acno: ['', [Validators.required, Validators.minLength(3)]],
    psw: ['', [Validators.required]],
    pin: ['', [Validators.required]]
  });
  constructor(private router: Router, private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  getError(name) {
    return (this.registerForm.get(name).touched || this.registerForm.get(name).dirty) && this.registerForm.get(name).errors;
  }
  register() {
    // console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      const result = this.dataService.register(
        this.registerForm.value.name,
        this.registerForm.value.acno,
        this.registerForm.value.pin,
        this.registerForm.value.psw
      )
      .subscribe(data=>{
        if (data) {
          // alert("successfully created account.Please Log in");
          this.router.navigateByUrl("");
        }},(data)=>{
alert(data.error.message);

        })
    }
  
      else {
        alert("form is invalid");
      }
      
      
  }
}
