import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  @Input() btnValue!:string;
  @Input() isDisabled:boolean = false;
  @Output() onToggle = new EventEmitter();

  @Input() isConfirm: boolean = false;
  

  isToggleButton(): any{
    this.isConfirm = !this.isConfirm;
    return this.onToggle.emit(this.isConfirm);
  }
}
