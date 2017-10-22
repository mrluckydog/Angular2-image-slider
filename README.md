# Angular2-image-slider
This is a component for showing images circularly.

# Parameters
imgUrls: an array of image urls.
imgWidth: the width of image.
imgHeight: the height of image.

# Example
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<img-slider [imgUrls]=imgUrls [imgWidth]=720 [imgHeight]=300></img-slider>`,
})
export class AppComponent {
  imgUrls: string[];
  baseImgUrl: string = "../assets/image/";

  constructor() {
    this.imgUrls = [this.baseImgUrl + "img1.jpg",
      this.baseImgUrl + "img2.jpg",
      this.baseImgUrl + "img3.jpg",
      this.baseImgUrl + "img4.jpg"
    ];
  }
}
