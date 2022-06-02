import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.scss']
})
export class CloginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
