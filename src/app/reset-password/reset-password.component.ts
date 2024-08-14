import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateForm';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})

export class ResetPasswordComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  resetForm!: FormGroup;
  email!: string;
  
  constructor(private fb: FormBuilder, private auth: DataService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email')!;

    this.resetForm = this.fb.group({
      token: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: [this.email, [Validators.required, Validators.email]]
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

  ResetPassword() {
    if (this.resetForm.valid) {
      const { token, password, confirmPassword, email } = this.resetForm.value;

      this.auth.resetPassword({ token, password, confirmPassword, email }).subscribe({
        next: (res) => {
          alert(res.message);
          this.resetForm.reset();
          this.router.navigate(['login']);
        },
        error: (err) => {
          alert(err?.error.message);
        }
      });
    } else {
      ValidateForm.validateAllFormFields(this.resetForm);
      alert("Your Form Is Invalid");
    }
  }
}
