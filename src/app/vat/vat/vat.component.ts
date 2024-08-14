import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrl: './vat.component.scss'
})
export class VatComponent implements OnInit {

  searchText: any;
  vats: any[] = []

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.getVAT();
  }

  getVAT() {
    this.dataService.GetVAT().subscribe(result => {
      this.vats = result;
    })
  }

}
