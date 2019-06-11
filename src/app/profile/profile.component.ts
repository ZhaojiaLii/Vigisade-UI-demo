import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: 'French',
    });
  }

  ngOnInit() {
  }

}
