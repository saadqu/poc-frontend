import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  @Input() control: FormControl;
  @Input() messages: {
    required: string,
    email: string,
    minlength: string,
    maxlength: string
  };
  constructor() { }

  ngOnInit() {
  }

}
