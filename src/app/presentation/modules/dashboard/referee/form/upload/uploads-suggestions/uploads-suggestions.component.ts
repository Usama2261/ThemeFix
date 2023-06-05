import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploads-suggestions',
  templateUrl: './uploads-suggestions.component.html',
  styleUrls: ['./uploads-suggestions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadsSuggestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
