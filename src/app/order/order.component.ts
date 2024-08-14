import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  searchText: any;
  
  constructor(private dataService: DataService, private router: Router) {}
  
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
