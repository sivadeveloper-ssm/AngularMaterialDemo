import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  openPage(index) : void {
    console.log("index" + index);
    this.route.navigate(['/amdemo',index]);
    console.log("Current Page");
  }

}
