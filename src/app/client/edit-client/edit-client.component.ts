import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  clientForm: FormGroup;
  clientId!: number;

  constructor(private clientService: DataService, private data: FormBuilder, private router: Router, private route: ActivatedRoute ) {
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clientId = +params['id'];
      this.clientService.getClientById(this.clientId).subscribe(client => {
        this.clientForm.patchValue(client);
      });
    });
  }

  onSubmit() {
    const updatedClient = this.clientForm.value;
    this.clientService.editClient(this.clientId, updatedClient).subscribe({
      complete: () => this.router.navigate(['client']),
      error: (error) => console.error(error)
    });
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
