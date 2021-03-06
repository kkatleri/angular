import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, NgModel, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'forms-reactive-app';
  genders = ['male', 'female'];

  signupForm: FormGroup;

  ngOnInit(){
    this. signupForm = new FormGroup({
    'username':new FormControl(null,Validators.required),
    'email': new FormControl(null,[Validators.required, Validators.email]),
    'gender': new FormControl('male')
    })
  }

  onSubmit(){
    console.log(this.signupForm);
  }
}
