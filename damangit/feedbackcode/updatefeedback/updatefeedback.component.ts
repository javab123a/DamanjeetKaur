import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUpdateService } from '../service/admin-update.service';
import { Admin } from '../model/admin';
@Component({
  selector: 'app-updatefeedback',
  templateUrl: './updatefeedback.component.html',
  styleUrls: ['./updatefeedback.component.css']
})
export class UpdatefeedbackComponent  {
admin: Admin;
  constructor(private route: ActivatedRoute,
private router: Router,
private updateService: AdminUpdateService) { 
this.admin = new Admin();
}
  onSubmit() {
this.updateService.save(this.admin).subscribe(data => this.gotoUserList());
}
gotoUserList() {
this.router.navigate(['feedback']);
}
}
