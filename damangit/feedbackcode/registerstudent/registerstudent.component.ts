import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user-service.service';
import { User } from '../model/user';
@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.css']
})
export class RegisterstudentComponent {
user: User;
constructor(
private route: ActivatedRoute,
private router: Router,
private userService: UserService) {
this.user = new User();
}
onSubmit() {
this.userService.save(this.user).subscribe(result => this.gotoUserList());
}
gotoUserList() {
this.router.navigate(['user-list']);
}
}
