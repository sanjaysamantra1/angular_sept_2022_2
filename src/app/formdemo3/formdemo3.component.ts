import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formdemo3',
  templateUrl: './formdemo3.component.html',
  styleUrls: ['./formdemo3.component.css'],
})
export class Formdemo3Component implements OnInit {
  registerForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.usingFormGroup();
    this.usingFormBuilder();
  }
  // create Reactive form using FormBuilder
  usingFormBuilder() {
    this.registerForm = this.formBuilder.group({
      firstname: new FormControl('sachin', {
        validators: [Validators.required, Validators.minLength(5)],
        updateOn: 'submit',
      }),
      lastname: new FormControl('tendulkar'),
      email: new FormControl('sachin@gmail.com'),
      dob: new FormControl('2022-11-05'),
      address: new FormGroup({
        city: new FormControl('bangalore'),
        state: new FormControl('Karnataka'),
        pin: new FormControl('123456'),
      }),
    });
  }
  // create Reactive form using FormGroup
  usingFormGroup() {
    this.registerForm = new FormGroup({
      firstname: new FormControl('sachin', {
        validators: [Validators.required, Validators.minLength(5)],
        updateOn: 'submit',
      }),
      lastname: new FormControl('tendulkar'),
      email: new FormControl('sachin@gmail.com'),
      dob: new FormControl('2022-11-05'),
      address: new FormGroup({
        city: new FormControl('bangalore'),
        state: new FormControl('Karnataka'),
        pin: new FormControl('123456'),
      }),
    });
  }

  submitMyForm(registerForm: any) {
    console.log(registerForm.value);
  }
}
