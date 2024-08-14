import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit{
  employeeForm: FormGroup;
  employeeId!: number;

  constructor(
    private employeeService: DataService,
    private data: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
      this.employeeService.getEmployeeById(this.employeeId).subscribe(employee => {
        this.employeeForm.patchValue(employee);
      });
    });
  }

  onSubmit() {
    const updatedEmployee = this.employeeForm.value;
    this.employeeService.editEmployee(this.employeeId, updatedEmployee).subscribe({
      complete: () => this.router.navigate(['employees']),
      error: (error) => console.error(error)
    });
  }

  
}
