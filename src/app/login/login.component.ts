import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateForm';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private auth: DataService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;

    if (this.isText) {
        this.eyeIcon = "fa-eye";
        this.type = "text";
    } else {
        this.eyeIcon = "fa-eye-slash";
        this.type = "password";
    }
  }

  onLogin() {
    if(this.loginForm.valid)
      {
        console.log(this.loginForm.value)

        this.auth.login(this.loginForm.value).subscribe({
          next:(res) => {
            alert(res.message);
            this.router.navigate(['otp', this.loginForm.value.username, this.loginForm.value.password]);
          },
          error:(err) => {
            alert(err?.error.message)
          }
        })
      }
      else 
      {
        //
        ValidateForm.validateAllFormFields(this.loginForm);
        alert("Your Form Is Invalid");
      }
  }

    

}
