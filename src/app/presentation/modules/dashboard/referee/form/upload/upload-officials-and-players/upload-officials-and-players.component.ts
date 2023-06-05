import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-officials-and-players',
  templateUrl: './upload-officials-and-players.component.html',
  styleUrls: ['./upload-officials-and-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadOfficialsAndPlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
