import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { MatToolbar } from '@angular/material';
import { MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  ListContent = [
    {
      contents: 'Conforme',
      icons: 'thumb_up_alt',
      id: 0
    },
    {
      contents: 'Sans objet / Non nv',
      icons: 'speaker_notes_off',
      id: 1
    },
    {
      contents: 'Non conforme',
      icons: 'thumb_down_alt',
      id: 2
    },
    {
      contents: 'Action corrective',
      icons: 'settings icon',
      id: 3
    },
    {
      contents: 'Situation dangeureuse',
      icons: 'priority_high',
      id: 4
    }
  ];

  constructor(private location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

}
