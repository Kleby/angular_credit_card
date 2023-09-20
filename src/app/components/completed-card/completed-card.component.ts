import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-completed-card',
  templateUrl: './completed-card.component.html',
  styleUrls: ['./completed-card.component.sass']
})
export class CompletedCardComponent {

  @Input() isConfirm!: boolean;

  @Output() onConfirm = new EventEmitter();


  getButtonToggle(event: boolean): void{
    this.onConfirm.emit(event);
  }

}
