import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MatTabGroup } from '@angular/material';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

  @Input() indexValue;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe( params => {
        this.indexValue  = params['index']; 
      })
  }

}
