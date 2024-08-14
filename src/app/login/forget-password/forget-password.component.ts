import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})

export class ForgetPasswordComponent implements OnInit {

  forgetForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private auth: DataService, private router: Router) {}

  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  submitEmail() {
    if(this.forgetForm.valid)
      {
        const email = this.forgetForm.value.email;

        this.auth.forgetPassword(email).subscribe({
          next:(res) => {
            alert(res.message);
            this.router.navigate(['reset', this.forgetForm.value.email]);
          },
          error:(err) => {
            alert(err?.error.message)
          }
        })
      }
      else 
      {
        //
        ValidateForm.validateAllFormFields(this.forgetForm);
        alert("Your Form Is Invalid");
      }
  }

    

}
