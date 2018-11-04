import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';

import { ManagementComponent } from './management/management.component';
import { ManagementDashboardService } from './management.service';


const routes = [
  {
    path: 'management',
    component: ManagementComponent,
    resolve: {
      data: ManagementDashboardService
    }
  },

  {
    path: '**',
    redirectTo: 'management'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    ChartsModule,
    NgxChartsModule,
    FuseSharedModule,
    FuseSidebarModule,
  ],
  declarations: [
    ManagementComponent
  ],
  providers: [
    ManagementDashboardService
  ]
})
export class ManagementModule { }
