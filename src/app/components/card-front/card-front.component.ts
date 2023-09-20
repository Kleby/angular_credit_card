import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.sass', './card-front.component.responsive.sass']
})
export class CardFrontComponent {
  @Input() cardName: string = '';
  @Input() cardNumber: string = '';
  @Input() cardMonth = '';
  @Input() cardYear = '';
}
