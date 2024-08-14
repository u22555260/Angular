import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent {
  clientForm!: FormGroup;

  constructor(private dataService: DataService, private data: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.clientForm = this.data.group({
      id: [0],//-- this might be deleted if ID does not pass
      client_Name: [''],
      client_Surname: [''],
      client_Address: [''],
      client_Email_Address: [''],
      client_Contact_Number: [],
      client_ID_Number: [],
      title: [''],
      client_Gender: ['']
    });
  }


  onSubmit(): void {
    const newClient = this.clientForm.value;
    this.dataService.addClient(newClient).subscribe({
      next: () => {},
      complete: () => this.router.navigate(['client']),
      error: (error) => console.log(error.error)
    });
  }
}
