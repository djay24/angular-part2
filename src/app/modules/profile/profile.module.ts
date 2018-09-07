import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatTabsModule } from '@angular/material';

import { ProfileComponent } from '../../components/profile/profile.component';
import { ProfileRouterModule } from '../profile-router/profile-router.module';
import { ProfileHomeComponent } from '../../components/profile/profile-home/profile-home.component';
import { ProfileAboutComponent } from '../../components/profile/profile-about/profile-about.component';
import { ProfileContactComponent } from '../../components/profile/profile-contact/profile-contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ProfileRouterModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
  ],
  declarations: [
    ProfileComponent,
    ProfileHomeComponent,
    ProfileAboutComponent,
    ProfileContactComponent
  ]
})
export class ProfileModule { }
