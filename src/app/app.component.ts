import { Component } from '@angular/core';
import { SettingsService } from './persistence/functionalities/settings/settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mis-client';
  selectedTheme="default";// default"mydarktheme"; "dark";
  subscription: Subscription;

  constructor(private dataService: SettingsService) {
     this.subscription = this.dataService.getTheme().subscribe((value) => {
      this.selectedTheme = value;
    });
  }

  updateValue(newValue: string) {
    this.dataService.setTheme(newValue);
    this.selectedTheme = newValue;
  }
}
