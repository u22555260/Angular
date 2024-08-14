import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Router } from "@angular/router";
import { Inventory } from "../shared/inventory";
import { Order } from "../shared/order";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  orders: Order[] = [];
  searchText: any;
  
  constructor(private dataService: DataService, private router: Router) {}

  toggleNavigation() {
    const container = document.querySelector('.container');
    if (container) {
      container.classList.toggle('active');
    }
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.dataService.GetOrders().subscribe((result: Order[]) => {
      this.orders = result;
      console.log(this.orders);
    })
  }

  cancelOrder(orderId: number) {
    this.dataService.deleteOrder(orderId).subscribe(result => {
      this.getOrders();
    })
  }
}
