import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsContainerComponent } from './tabs/tabs-container/tabs-container.component';
import { TabsContentComponent } from './tabs/tabs-content/tabs-content.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {
  AllCommunityModule,
  ModuleRegistry,
  provideGlobalGridOptions,
} from 'ag-grid-community';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridModule } from 'ag-grid-angular';

ModuleRegistry.registerModules([AllCommunityModule]);
provideGlobalGridOptions({ theme: 'legacy' });

@NgModule({
  declarations: [
    TabsContainerComponent,
    TabsContentComponent,
    DatatableComponent,
  ],
  imports: [CommonModule, NgbNavModule, AgGridModule],
  exports: [TabsContainerComponent, TabsContentComponent, DatatableComponent],
})
export class SharedModule {}
