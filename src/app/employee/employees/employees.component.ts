import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Employee } from '../../shared/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  editEmployee(id: number) {
    this.router.navigate(['employees/edit', id]);
  }

  deleteEmployee(id: number) {
    console.log('delete id', id);
    this.dataService.deleteEmployee(id).subscribe(result => {
      console.log(result);
      this.getEmployees(); // Refresh the employees list after deletion
    });
  }

  getEmployees() {
    this.dataService.GetEmployees().subscribe((result: Employee[]) => {
      this.employees = result;
    });
  }


  employeeIdToNumber(employeeId: any): number {
    return typeof employeeId === 'number' ? employeeId : parseInt(employeeId, 10);
  }

}
