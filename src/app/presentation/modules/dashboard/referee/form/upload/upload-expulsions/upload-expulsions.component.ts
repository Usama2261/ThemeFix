import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-expulsions',
  templateUrl: './upload-expulsions.component.html',
  styleUrls: ['./upload-expulsions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadExpulsionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
