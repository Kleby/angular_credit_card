import { Component } from '@angular/core';
import { ICard } from './models/ICard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass', './app.component.responsive.sass'],
})
export class AppComponent {
  cardFormValues!: ICard;
  isConfirm: boolean = false;

  cardName: string = 'Jane Applessed';
  cardNumber: string = '0000 0000 0000 0000';
  cardMonth: string = '00';
  cardYear: string = '00';
  cardCVC: string = '000';

  getCardFormValues(event: ICard): ICard {
    return (this.cardFormValues = event);
  }

  getCardName(event: string): string {
    return (this.cardName = !event ? 'Jane Applessed' : event);
  }

  getCardNumber(event: string): string {
    return (this.cardNumber = !event ? '0000 0000 0000 0000' : event);
  }

  getCardMonth(event: string): string {
    event = event.replace(/\D/g, '');
    return (this.cardMonth = !event ? '00' : event);
  }

  getCardYear(event: string): string {
    event = event.replace(/\D/g, '');
    return (this.cardYear = !event ? '00' : event);
  }

  getCardCVC(event: string): string {
    event = event.replace(/\D/g, '');
    return (this.cardCVC = !event ? '000' : event);
  }

  onToggleConfirm(confirm: boolean) {
    this.isConfirm = confirm;
    if (this.isConfirm) {
      this.cardName   = 'Jane Applessed';
      this.cardNumber = '0000 0000 0000 0000';
      this.cardMonth  = '00';
      this.cardYear  = '00';
      this.cardCVC   = '000';
    }    
  }
}
