import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup;


  constructor(private dataService: DataService, private data: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.employeeForm = this.data.group({
      id: [0],//-- this might be deleted if ID does not pass
      name: [''],
      surname: [''],
      address: [''],
      emailAddress: [''],
      contactNumber: [''],
      idNumber: [''],
      title: [''],
      gender: [''],
      employeeType: [''],
      image: ['']
    });
  }

  onSubmit(): void {
    const newEmployee = this.employeeForm.value;
    this.dataService.addEmployee(newEmployee).subscribe({
      next: () => {},
      complete: () => this.router.navigate(['courses']),
      error: (error) => console.log(error.error)
    });
  }

}
