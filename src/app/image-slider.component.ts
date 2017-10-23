/**************************************************************************************
**Description: This is a component for showing images circularly.
**Parameters: imgUrls, imgWidth, imgHeight
**Author: Lijie
**Date: Sun Oct 22 2017
***************************************************************************************/

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'img-slider',
    template: `
        <div [ngStyle]="{'position': 'relative', 'width':imgWidth + 'px', 'overflow': 'hidden'}">
            <div class="slider" [ngStyle]="{'width': imgContainerWidth + 'px', 'height': imgHeight + 'px'}">
                <img *ngFor="let imgUrl of imgUrls; let i=index;" src={{imgUrl}} id={{i}} [ngStyle]=imgSlideStyle>
            </div>
            <img (click)="prevImg()" style="position: absolute; top: 50%; left: 20px; margin-top: -10px; cursor: pointer;" src="assets/image/arrow-left.png">
            <img (click)="nextImg()" style="position: absolute; top: 50%; right: 20px; margin-top: -10px; cursor: pointer;" src="assets/image/arrow-right.png">
        </div>
    `
})

export class ImageSliderComponent implements OnInit {
    @Input('imgUrls') imgUrls: string[];
    @Input('imgWidth') imgWidth: number;
    @Input('imgHeight') imgHeight: number;

    lock: boolean;
    index: number;
    imgCount: number;
    imgContainerWidth: number;
    imgSlideStyle: object;
    transitionDuration: number;

    constructor() {
        this.lock = false;
        this.index = 0;
        this.transitionDuration = 2;
        this.imgSlideStyle = {
            'transform': 'translateX(-100%)'
        }
        setInterval(() => {
            this.nextImg();
        }, 5000);
    }

    ngOnInit() {
        this.imgCount = this.imgUrls.length;
        this.imgContainerWidth = this.imgWidth * (this.imgCount + 2);
        this.imgUrls.unshift(this.imgUrls[this.imgCount - 1]);
        this.imgUrls.push(this.imgUrls[1]);
    }

    private slideStyle(translatePercent: number, transitionDuration: number): object {
        let transformStyle: object;
        if (transitionDuration !== null) {
            transformStyle = {
                'transform': 'translateX(' + translatePercent + '%)',
                'transition-duration': transitionDuration + 's',
            }
        } else {
            transformStyle = {
                'transform': 'translateX(' + translatePercent + '%)',
            }
        }
        return transformStyle;
    }



    private prevImg(): void {
        if (!this.lock) {
            let percent: number;

            this.lock = true;
            if (this.index > 0) {
                --this.index;
            }

            percent = -100 * this.index;
            this.imgSlideStyle = this.slideStyle(percent, this.transitionDuration);

            if (this.index === 0) {
                setTimeout(
                    () => {
                        percent = -100 * this.imgCount;
                        this.imgSlideStyle = this.slideStyle(percent, null);
                    }, this.transitionDuration * 1000);
                this.index = this.imgCount;
            }

            this.releaseLock();
        }
    }

    private nextImg(): void {
        if (!this.lock) {
            let percent: number;

            this.lock = true;
            if (this.index === 0) {
                ++this.index;
            }

            if (this.index < this.imgCount + 1) {
                ++this.index;
            }

            percent = -100 * this.index;
            this.imgSlideStyle = this.slideStyle(percent, this.transitionDuration);

            if (this.index === this.imgCount + 1) {
                setTimeout(
                    () => {
                        percent = -100;
                        this.imgSlideStyle = this.slideStyle(percent, null);
                    }, this.transitionDuration * 1000);
                this.index = 0;
            }

            this.releaseLock();
        }
    }


    private releaseLock() {
        setTimeout(() => {
            this.lock = false;
        }, this.transitionDuration * 1000);
    }

}
