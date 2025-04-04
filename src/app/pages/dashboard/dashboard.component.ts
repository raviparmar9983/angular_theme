import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  statusList: { id: string; name: string }[] = [
    { id: 'Active', name: 'active' },
    { id: 'Inactive', name: 'inactive' },
    { id: 'Pending', name: 'pending' },

    { id: 'Pending', name: 'pending' },

    { id: 'Pending', name: 'pending' },

    { id: 'Pending', name: 'pending' },

    { id: 'Pending', name: 'pending' },
  ];
}
