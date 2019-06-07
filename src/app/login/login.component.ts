import { Component, OnInit } from '@angular/core';
import { switchPage } from '../animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [switchPage]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
