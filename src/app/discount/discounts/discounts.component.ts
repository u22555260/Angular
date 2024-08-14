import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.scss'
})
export class DiscountsComponent implements OnInit {

  discounts: any[] = [];
  searchText: any;
  
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.getDiscounts();
  }

  getDiscounts() {
    this.dataService.GetDiscounts().subscribe((result) => {
      this.discounts = result;
    })
  }

  deleteDiscount(id: number) {
    this.dataService.DeleteDiscountCode(id).subscribe(res => {
      this.getDiscounts();
    })
  }
}
