# Angular2-image-slider
This is a component for showing images circularly.

# Parameters
<p>imgUrls: an array of image urls.</p>
<p>imgWidth: the width of image.</p>
<p>imgHeight: the height of image.</p>

# Example
<p>import { Component } from '@angular/core';</p>

<p>@Component({</p>
<p>  selector: 'app-root',</p>
<p>  template: `<img-slider [imgUrls]=imgUrls [imgWidth]=720 [imgHeight]=300></img-slider>`,</p>
<p>})</p>
<p>export class AppComponent {</p>
<p>  imgUrls: string[];</p>
<p>  baseImgUrl: string = "../assets/image/";</p>

<p>  constructor() {</p>
<p>    this.imgUrls = [this.baseImgUrl + "img1.jpg",</p>
<p>      this.baseImgUrl + "img2.jpg",</p>
<p>      this.baseImgUrl + "img3.jpg",</p>
<p>      this.baseImgUrl + "img4.jpg"</p>
<p>    ];</p>
<p>  }</p>
<p>}</p>
