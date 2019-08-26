import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { DataserviceService } from "../dataservice.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  data: string;
  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private ds: DataserviceService
  ) {}
  ngOnInit() {
    this.loginForm = this.FormBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  get formControls() {
    return this.loginForm.controls;
  }
  login(data) {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.ds.user = this.data;
    this.router.navigate(["dash"]);
  }
}
