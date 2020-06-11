import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { UpdateService } from '../service/updateservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: User[];
user: User;
selectedStudent: User = new User();
  constructor(private route: ActivatedRoute,
private router: Router,
	private userService: UserService,  private updateservice: UpdateService) {
		this.user = new User();
	 }
editStudent(user: User){
if (confirm(`Are you sure you want to update the id ${user.id}. This cannot be undone.`)){
     this.selectedStudent = new User();
     this.selectedStudent.id=user.id;
     this.selectedStudent.name=user.name;
     this.selectedStudent.email=user.email;
     this.selectedStudent.technology=user.technology;
     this.selectedStudent.batch=user.batch;
   }
}
   editselectedStudent(){
	console.log(this.selectedStudent.id);
	this.updateservice.save(this.selectedStudent).subscribe(data => this.gotoUserList());
	console.log(this.user);
}
gotoUserList() {
this.router.navigate(['user-list']);
}
	
  ngOnInit() {
	this.userService.findAll().subscribe(data => {
		 this.users = data;
	});
  }
deleteUser(user: User){
    if (confirm(`Are you sure you want to update the id ${user.id}. This cannot be undone.`)){
         this.userService.deleteById(user).subscribe(data => {
          this.user = data;
});
    }
}
/*editUser(user: User){
    if (confirm(`Are you sure you want to update the id ${user.id}. This cannot be undone.`)) {
       this.router.navigate(['updatefeedback']);
}
}*/
}
