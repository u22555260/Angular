import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateForm';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signupForm!: FormGroup;
  clientForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private auth: DataService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })

    this.clientForm = this.fb.group({
      client_Name: ['', Validators.required],
      client_Surname: ['', Validators.required],
      client_Email_Address: ['', Validators.required],
      client_Contact_Number: ['', Validators.required],
      client_ID_Number: ['', Validators.required],
      title: ['', Validators.required],
      client_Address: ['', Validators.required],
      client_Gender: ['', Validators.required],
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

  onSignup() {
    if (this.signupForm.valid && this.clientForm.valid) {
      const { email, username, password, role } = this.signupForm.value;
  
      this.auth.signUp({ email, username, password, role }).pipe(
        switchMap((res) => {
          alert(res.message);
          this.signupForm.reset();
          return this.auth.addClient(this.clientForm.value);
        })
      ).subscribe({
        next: (res) => {
          alert(res.message);
          this.clientForm.reset();
          this.router.navigate(['login']);
        },
        error: (err) => {
          alert(err?.error.message);
        }
      });
    } else {
      ValidateForm.validateAllFormFields(this.signupForm);
      alert("Your Form Is Invalid");
    }
  }
  

  createClient() {
    if(this.clientForm.valid)
    {
      this.auth.addClient(this.clientForm.value).subscribe({
        next:(res) => {
          alert(res.message)
          this.clientForm.reset();
          this.router.navigate(['login']);
        },
        error:(err) => {
          alert(err?.error.message)
        }
      })
    }
    else 
    {
      ValidateForm.validateAllFormFields(this.clientForm);
      alert("Your Form Is Invalid");
    }
  }

  createClientUser() 
  {
    this.onSignup();
    this.createClient();
  }

}
