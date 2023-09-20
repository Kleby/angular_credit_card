import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass', './form.component.responsive.sass']
})
export class FormComponent implements OnInit {

  cardForm!: FormGroup;

  @Output() cardFormValues = new EventEmitter();
  @Output() cardValueName = new EventEmitter();
  @Output() cardValueNumber = new EventEmitter();
  @Output() cardValueMonth = new EventEmitter();
  @Output() cardValueYear = new EventEmitter();
  @Output() cardValueCVC = new EventEmitter();
  @Output() onConfirm = new EventEmitter();

  @Input() isConfirm!: boolean;

  
  constructor( private fb: FormBuilder){}

  ngOnInit(){    
    const date = new Date();
    this.cardForm = this.fb.group({
      cardName:['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],
      cardNumber:['', [ Validators.required, Validators.pattern('^[0-9 ]+$'), Validators.minLength(19)]],
      cardMonth:['', [ Validators.required, Validators.max(12), Validators.min(1), Validators.pattern('^[0-9]+$')]],
      cardYear: ['', [ Validators.required, Validators.min(date.getFullYear() % 100)]],
      cardCVC: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(3)]]
    });
  }

  onSubmit(){
    this.cardFormValues.emit(this.cardForm.value);    
  };

  get errorField(): any{
    return this.cardForm.controls;
  }

  errorForm(inputField: string): boolean{
    return this.errorField[inputField].invalid &&
    (this.errorField[inputField].dirty || 
    this.errorField[inputField].touched );
  }
 
  onCardName(): void{     
    if(!this.cardForm.value.cardName) return this.cardValueName.emit('')
    this.cardValueName.emit(this.cardForm.value.cardName)
  }

  formatNumbers(): string{
    return this.cardForm.value.cardNumber = this.cardForm.value.cardNumber.replace(/([0-9]{4})+$/g, "$1 ");
  }

  onCardNumber(): void{
    this.cardValueNumber.emit(this.cardForm.value.cardNumber);
    if(this.cardForm.value.cardNumber.length < 19) this.formatNumbers();
  }

  filterNumber(event:string, inputField:string){
    inputField = event.replace(/\D/g, '');
    return event = inputField;
  }

  onCardMonth(event: any): void{ 
    event.value = this.filterNumber(event.value, this.cardForm.value.cardMonth)
    this.cardValueMonth.emit(this.cardForm.value.cardMonth);
  }

  onCardYear(event: any): void{    
    event.value = this.filterNumber(event.value, this.cardForm.value.cardYear);    
    this.cardValueYear.emit(this.cardForm.value.cardYear);
  }

  onCardCVC(event: any): void{
    event.value = this.filterNumber(event.value, this.cardForm.value.cardCVC);
    this.cardValueCVC.emit(this.cardForm.value.cardCVC)
  }

  getButtonToggle(event: boolean): void{
    this.onConfirm.emit(event);
    this.onSubmit();
  }
}
