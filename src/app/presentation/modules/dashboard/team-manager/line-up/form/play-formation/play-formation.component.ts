import { Component } from '@angular/core';

@Component({
  selector: 'app-play-formation',
  templateUrl: './play-formation.component.html',
  styleUrls: ['./play-formation.component.scss']
})
export class PlayFormationComponent {
  formation = null;
  setData(value: any){
    if(value){
      this.formation = value.target.value;
    }
  }
}
