import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-content',
  templateUrl: './tabs-content.component.html',
  styleUrl: './tabs-content.component.scss',
})
export class TabsContentComponent {
  @Input({ required: true }) tabTitle!: string;
  @Input() active = false;
}
