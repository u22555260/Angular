import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Client } from "../../shared/client";
import { Router } from "@angular/router";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  searchText: any;

  constructor(private dataService: DataService, private router: Router) { }


  ngOnInit(): void {
    this.getClients();
  }

  editClient(id: number) {
    console.log('Edit button clicked'); // Adding console log statement
    this.router.navigate(['client/edit', id]);
  }
   
  deleteClient(id: number) {
    console.log('delete id', id);
    this.dataService.deleteClient(id).subscribe(result => {
      console.log(result);
      this.getClients(); // Refresh the courses list after deletion
    });
  }

  getClients() {
    this.dataService.GetClients().subscribe((result: Client[]) => {
      this.clients = result;
    });
  }

  clientIdToNumber(clientId: any): number {
    return typeof clientId === 'number' ? clientId : parseInt(clientId, 10);
  }
}
