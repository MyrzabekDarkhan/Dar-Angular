import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  login() {
    if (!this.form.valid) {
      return;
    }
    localStorage.setItem('dar-lab-auth', this.form.value['login']);
    this.router.navigate(['/']);
  }
  
}
