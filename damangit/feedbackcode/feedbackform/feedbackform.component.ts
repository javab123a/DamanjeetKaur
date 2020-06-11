import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../service/adminservice.service';
import { Admin } from '../model/admin';
@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent {
	admin: Admin;
constructor(private route: ActivatedRoute,
private router: Router,
private adminService: AdminService) {
	this.admin = new Admin();
}
onSubmit() {
this.adminService.save(this.admin).subscribe(result => this.gotoUserList());
}
gotoUserList() {
this.router.navigate(['feedbackform']);
}
}
