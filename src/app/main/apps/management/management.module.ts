import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';


import { ManagementComponent } from './management/management.component';
import { FuseSidebarModule } from '@fuse/components';
import { MatIconModule, MatButtonModule, MatDividerModule, MatMenuModule, MatFormFieldModule, MatSelectModule, MatTableModule, MatTabsModule } from '@angular/material';

const routes = [
  {
    path: 'management',
    component: ManagementComponent,
    resolve: {
      // academy: AcademyCoursesService
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
    MatDividerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,

    FuseSharedModule,
    FuseSidebarModule,
  ],
  declarations: [
    ManagementComponent
  ]
})
export class ManagementModule { }
