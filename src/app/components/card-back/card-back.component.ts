import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.sass', './card-back.component.responsive.sass']
})
export class CardBackComponent implements OnInit{

  @Input() cvc: string = '';

  ngOnInit(): void{    
  }

}
