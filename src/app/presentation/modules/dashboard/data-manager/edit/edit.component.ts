import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { MatchEvent } from 'src/app/core/models/matchEvent.model';
import { StateManagementService } from 'src/app/core/services/state-management.service';

@Component({
  selector: 'app-data-manager-edit-match',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataManagerEditMatchComponent implements OnInit {
  @Input() data!: any;

  matchEvent: MatchEvent = new MatchEvent();

  message: any = null;

  constructor(
    private zone: NgZone,
    private ref: ChangeDetectorRef,
    private dataManagerService: StateManagementService
  ) {}

  ngOnInit(): void {}

  update() {
    this.message = {
      type: 'success',
      title: 'Success',
      message: 'Update success',
    };
    this.resetMessage();
  }

  delete() {
    this.message = {
      type: 'confirm',
      message: 'Are you sure you want to delete this user?',
    };
    // this.resetMessage()
  }

  reset() {
    this.message = {
      type: 'error',
      title: 'Oops!',
      message: 'Something went wrong please try again later',
    };
    this.resetMessage();
  }

  resetMessage() {
    this.zone.run(() => {
      setTimeout(() => {
        this.message = null;
        this.ref.markForCheck();
      }, 1000);
    });
  }

  handleConfirm(e: any) {
    if (e) {
      this.message = {
        type: 'success',
        title: 'Success',
        message: 'Item deleted successfully',
      };
      this.resetMessage();
    } else {
      this.message = null;
    }
  }

  onUpdate() {
    let model: any = {};
    model['id'] = 1;
    model['away_team'] = this.matchEvent.away_team;
    model['city'] = this.matchEvent.city;
    model['date'] = this.matchEvent.date;
    model['home_team'] = this.matchEvent.home_team;
    model['round'] = this.matchEvent.round;
    model['stadium'] = this.matchEvent.stadium;
    model['tournament'] = this.matchEvent.tournament;
    model['venue'] = this.matchEvent.venue;
    this.dataManagerService.updateMatchEvent(model)
      .subscribe((res: any) => {

      });
  }
}
