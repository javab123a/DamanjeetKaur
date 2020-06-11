import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin';
import { AdminService } from '../service/adminservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
    admins: Admin[];
  constructor(private route: ActivatedRoute,
private router: Router,
	private adminService: AdminService) { }

  ngOnInit() {
	this.adminService.findAll().subscribe(data => {
		 this.admins = data;
	});
  }
deleteUser(admin: Admin){
    if (confirm(`Are you sure you want to update the id ${admin.id}. This cannot be undone.`)){
         this.adminService.deleteById(admin).subscribe(data => {
this.admins = data;
});
    }
}
editUser(admin: Admin){
    if (confirm(`Are you sure you want to update the id ${admin.id}. This cannot be undone.`)) {
       this.router.navigate(['updatefeedback']);
}
}
}
