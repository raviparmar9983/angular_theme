import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabsContentComponent } from '../tabs-content/tabs-content.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.scss',
})
export class TabsContainerComponent {
  @ContentChildren(TabsContentComponent)
  tabs!: QueryList<TabsContentComponent>;

  ngAfterContentInit(): void {
    let activeTab = this.tabs.filter((tab) => tab.active);
    if (!activeTab.length) {
      this.onSelectTab(this.tabs.first);
    }
  }

  onSelectTab(tab: TabsContentComponent) {
    this.tabs.forEach((tab) => (tab.active = false));
    tab.active = true;
  }
}
