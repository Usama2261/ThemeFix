import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ContentProjectionDirectiveDirective } from 'src/app/core/pipes/content-projection-directive.directive';
import { DeviceSizeService } from 'src/app/core/services/device-size.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  currentId: string = ""
  @ViewChild('drawerSwitch') drawerSwitch!: ElementRef
  @Input() toggleDrawer!: Subject<any>
  @Input() title: string = ""
  @Input() subtitle: string = ""
  isDrawerOpen: any = false
  drawerWidth: string = "w-0"
  isMobile: boolean
  @ContentChild(ContentProjectionDirectiveDirective) content!: ContentProjectionDirectiveDirective;

  constructor(
    private deviceSize: DeviceSizeService
  ) {
    this.isMobile = this.deviceSize.isMobile()
  }

  ngOnInit(): void {
    this.currentId = uuidv4()
    if (this.toggleDrawer) {
      this.toggleDrawer.subscribe(() => {
        this._toggleDrawer()
      })
    }
    this.deviceSize.isMobile$.subscribe((isMobile: boolean) => {
      this.isMobile = isMobile
    })
  }

  _toggleDrawer() {
    this.drawerSwitch.nativeElement.click()
    this.isDrawerOpen = this.drawerSwitch.nativeElement.checked
    this.isDrawerOpen ? this.drawerWidth = "w-0" : this.drawerWidth = "w-80"
    console.log(this.isDrawerOpen, this.isMobile);

  }
}
