import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {


  @Input() listUser;

  constructor() { }

  ngOnInit(): void {


    console.log("testInput",this.listUser);

  }

}
