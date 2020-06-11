import { Component, OnInit } from '@angular/core';
import { Result } from '../model/result';
import { ResultService } from '../service/result.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-resultuser',
  templateUrl: './resultuser.component.html',
  styleUrls: ['./resultuser.component.css']
})
export class ResultuserComponent implements OnInit {
result: Result[];
  constructor(private route: ActivatedRoute,
private router: Router,
	private resultService: ResultService) { 
}
  ngOnInit() {
	this.resultService.findAll().subscribe(data => {
this.result = data;
  });
}
}
