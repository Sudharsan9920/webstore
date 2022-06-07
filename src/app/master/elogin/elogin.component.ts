import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.component.html',
  styleUrls: ['./elogin.component.scss']
})
export class EloginComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users : any;

  getUsers()
  {
    this.apiService.getRecords().subscribe(
      data => { this.users = data;},
      error => { console.log(error);},
      () => { console.log("Success")}
    );
  }
}
