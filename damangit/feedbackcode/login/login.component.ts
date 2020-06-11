import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmindataService } from '../service/admindata.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
loading = false;
submitted = false;
returnUrl: string;
constructor(
private formBuilder: FormBuilder,
private route: ActivatedRoute,
private router: Router,
private admindataService: AdmindataService
) { }
ngOnInit() {
this.loginForm = this.formBuilder.group({
email: ['', Validators.required],
password: ['', Validators.required]
});
}
// for accessing to form fields
get fval() { return this.loginForm.controls; }
onFormSubmit() {
this.submitted = true;
if (this.loginForm.invalid) {
return;
}
this.loading = true;
this.admindataService.login(this.fval.email.value, this.fval.password.value)
.subscribe(
data => {
console.log(data);
this.router.navigate(['welcome']);
},
error => {
console.log(error);
this.loading = false;
});
}
}

