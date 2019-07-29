import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {
  profImg='assets/black_white_pic.jpg'
  constructor() { }

  ngOnInit() {
  }

  chngProfImgClr(mouseState){
    if (mouseState=='hover'){
      this.profImg='assets/high_brightness_pic.jpg'
    }
    else if (mouseState == 'out'){
      this.profImg='assets/black_white_pic.jpg'
    }

  }
}
