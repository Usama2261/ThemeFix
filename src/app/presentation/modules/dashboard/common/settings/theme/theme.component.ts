import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/persistence/functionalities/settings/settings.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  constructor(private dataService: SettingsService) { }
  theme :string='default';
  ngOnInit(): void {
  }
  update(){
    console.log('update theme');
    this.dataService.setTheme(this.theme);
  }
  updateValue(newValue: string) {
    this.dataService.setTheme(newValue);
    
  }
}
