import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-situation-dangerous',
  templateUrl: './situation-dangerous.component.html',
  styleUrls: ['./situation-dangerous.component.scss']
})
export class SituationDangerousComponent implements OnInit {

  TypeSelectElements = [
    {
      id: 0,
      type: 'type 1'
    },
    {
      id: 1,
      type: 'type 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
