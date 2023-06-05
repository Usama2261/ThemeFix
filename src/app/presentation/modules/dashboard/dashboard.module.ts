import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { CheckRouteComponent } from './common/check-route/check-route.component';
import { NotificationsComponent } from './common/notifications/notifications.component';
import { AboutComponent } from './common/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SettingsComponent } from './common/settings/settings.component';
import { NotificationComponent } from './common/notifications/notification/notification.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    DashboardComponent,
    NotFoundComponent,
    CheckRouteComponent,
    NotificationsComponent,
    AboutComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    ComponentsModule
  ]
})
export class DashboardModule { }
