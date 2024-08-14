import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.scss'
})
export class ManagerDashboardComponent {

  
toggleNavigation() {
  const container = document.querySelector('.container');
  if (container) {
    container.classList.toggle('active');
  }
}

}
