# Angular2-image-slider
This is a component for showing images circularly.

# Parameters
<p><strong>imgUrls:</strong> an array of image urls.</p>
<p><strong>imgWidth:</strong> the width of image.</strong></p>
<p><strong>imgHeight:</strong> the height of image.</strong></p>

# Example
```typescript
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
```
