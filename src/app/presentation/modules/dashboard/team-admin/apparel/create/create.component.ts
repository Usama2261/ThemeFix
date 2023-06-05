import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-apparel-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApparelCreateComponent implements OnInit {

  message: any = null
  shirthome : any = false
  shirtaway : any = false
  shorthome : any = false
  shortaway : any = false
  socksaway : any = false
  sockshome : any = false
  constructor(
    private zone: NgZone,
    private ref: ChangeDetectorRef
  ) { }

  toggleModal: Subject<boolean> = new Subject();

  ngOnInit(): void {
  }

  add(  ) {
    this.message = {
      type: "success",
      title: "Success",
      message: "User added successfully"
    }
    this.resetMessage()
  }

  showShirtHomeApparel(event : any) {
    console.log(event);
    this.shirthome= ! this.shirthome;
  }
  showShirtAwayApparel(event : any) {
    console.log(event);
    this.shirtaway= ! this.shirtaway;
  }
  showShortHomeApparel(event : any) {
    console.log(event);
    this.shorthome= ! this.shorthome;
  }
  showShortAwayApparel(event : any) {
    console.log(event);
    this.shortaway= ! this.shortaway;
  }
  showSocksHomeApparel(event : any) {
    console.log(event);
    this.sockshome= ! this.sockshome;
  }
  showSocksAwayApparel(event : any) {
    console.log(event);
    this.socksaway= ! this.socksaway;
  }

  closeModal() {
    this.toggleModal.next(true)
  }

  resetMessage() {
    this.zone.run(() => {
      setTimeout(() => {
        this.message = null
        this.ref.markForCheck()
      }, 1000);
    })
  }
}
