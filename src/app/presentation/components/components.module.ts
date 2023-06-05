import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
 import { DashModalComponent } from './dash-modal/dash-modal.component ';
 import { AccordianComponent } from './accordian/accordian.component';
import { InnerMenuComponent } from './inner-menu/inner-menu.component';
import { RouterModule } from '@angular/router';
import { InnerSearchComponent } from './inner-search/inner-search.component';
import { InnerButtonComponent } from './inner-button/inner-button.component';
import { InnerTableComponent } from './inner-table/inner-table.component';
import { DashInnerTableComponent } from './inner-table/dash-inner-table.component';
import { InnerTitleComponent } from './inner-title/inner-title.component';
import { DrawerComponent } from './drawer/drawer.component';
import { AlertComponent } from './alert/alert.component';
import { InnerTabsComponent } from './inner-tabs/inner-tabs.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { InnerTabComponent } from './inner-tabs/inner-tab/inner-tab.component';
import { MainSideMenuComponent } from './main-side-menu/main-side-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataManagerMenuComponent } from './main-side-menu/data-manager-menu/data-manager-menu.component';
import { SideMenuItemComponent } from './main-side-menu/side-menu-item/side-menu-item.component';
import { LeagueDirectorMenuComponent } from './main-side-menu/league-director-menu/league-director-menu.component';
import { InnerMobileHeaderComponent } from './inner-mobile-header/inner-mobile-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    ModalComponent,
   DashModalComponent,
   AccordianComponent,
    InnerMenuComponent,
    InnerSearchComponent,
    InnerButtonComponent,
    InnerTableComponent,
    InnerTitleComponent,
    DrawerComponent,
    AlertComponent,
    InnerTabsComponent,
    BackButtonComponent,
    InnerTabComponent,
    MainSideMenuComponent,
    DataManagerMenuComponent,
    SideMenuItemComponent,
    LeagueDirectorMenuComponent,
    InnerMobileHeaderComponent,
    SideMenuComponent,
    DashInnerTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    ModalComponent,
   DashModalComponent,
   AccordianComponent,
    InnerMenuComponent,
    InnerSearchComponent,
    InnerButtonComponent,
    InnerTableComponent,
    DashInnerTableComponent,
    InnerTitleComponent,
    DrawerComponent,
    AlertComponent,
    InnerTabsComponent,
    BackButtonComponent,
    InnerTabComponent,
    MainSideMenuComponent,
    InnerMobileHeaderComponent,
    SideMenuComponent
  ]
})
export class ComponentsModule {}
