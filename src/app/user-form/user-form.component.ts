import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  user;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Here\'s the form: ', this.form.value);
    this.user = {
      email: this.form.value.email,
      subscription: this.form.value.subscription,
      password: this.form.value.password
    }
    this.form.reset();
  }

}
