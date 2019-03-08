import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
    
  private Subjects = ['Fiction','Business','Finance','Economics',
                            'Physcology','Technology','Law',
                          'Nature','Polictical Science','Mathematics',
                          'Travel','Health & Fitness'];

  constructor() { }

  ngOnInit() {
  }

}
