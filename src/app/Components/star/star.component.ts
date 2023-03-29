import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  cropWidth : number = 75;
  @Input() rating : number =0;

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth =this.rating * 75/5;
  }

  onClick()
  {
    console.log(this.rating);
    this.ratingClicked.emit(`the rating is ${this.rating}`)

  }
  @Output() ratingClicked:EventEmitter<string>= new EventEmitter<string>();

}
