import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.scss',
})
export class VerticalComponent {
  onMenuToggle(event: any) {
    document.getElementById('sidebar')!.classList.toggle('open');
    const isSideBarEnabled = document.body.getAttribute('data-sidebar-enabled');
    if (isSideBarEnabled === null || isSideBarEnabled == 'enabled') {
      document.body.setAttribute('data-sidebar-enabled', 'disabled');
    } else if (isSideBarEnabled === 'disabled') {
      document.body.setAttribute('data-sidebar-enabled', 'enabled');
    }
  }
}
