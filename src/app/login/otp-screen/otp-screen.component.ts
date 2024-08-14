import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-otp-screen',
  templateUrl: './otp-screen.component.html',
  styleUrl: './otp-screen.component.scss'
})

export class OtpScreenComponent implements OnInit {
  

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  username!: string;
  password: string = "";
  logRole: any;
  
  constructor(private fb: FormBuilder, private router: Router, private auth: DataService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')!;
    this.password = this.route.snapshot.paramMap.get('password')!;

    this.loginForm = this.fb.group({
      username: [this.username, Validators.required], 
      otp: ['', Validators.required]
    });
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
        const { username, otp } = this.loginForm.value;

        this.auth.login2FA(username, otp).subscribe({
          next:(res: any) => {
            alert("Success!");
            localStorage.setItem('token', res.token)
            localStorage.setItem('username', username)
            localStorage.setItem('password', this.password)
            localStorage.setItem('loggedIn', 'true')
            localStorage.setItem('roles', res.roles)

            if(res.roles == "Admin")
            {
                this.router.navigate(['admin-dash']);
            }
            else if(res.roles == "User")
            {
                this.router.navigate(['home']);
            }
            else
            {
              this.router.navigate([''])
            }
            
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
