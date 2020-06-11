import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateService } from '../service/updateservice.service';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent {
user: User;
  constructor(private route: ActivatedRoute,
private router: Router,
private userService: UserService,
private updateService: UpdateService) { 
this.user = new User();
}
/* ngOnInit() {
this.userService.editUser(user).subscribe(result => {
this.user = result;
});
}*/
edit1(user: User){
	this.user = user;
}

  onSubmit() {
 console.log('hello');
 this.updateService.save(this.user).subscribe(data => {
 console.log(data);
});
}
}
