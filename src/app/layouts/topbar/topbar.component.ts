import { Component, Output, output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  @Output() toggleMenu = new EventEmitter();

  onToggleMenu() {
    this.toggleMenu.emit();
  }
}
