import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-booklisting',
  templateUrl: './booklisting.component.html',
  styleUrls: ['./booklisting.component.scss']
})
export class BooklistingComponent implements OnInit {

  private attribute;
  @Input() results : [];
  displayedColumns : String[] = ['title', 'author'];
  private dataSource : MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;
  constructor(private api : DataService,private route : ActivatedRoute) { }

  ngOnInit() {
    this.attribute = this.changeCaseFirstCharater(this.route.snapshot.url[0].path);
    this.getBookListing();
  }

  getBookListing() : void {
    this.api.getData(this.attribute).subscribe( data => {
      this.results = data;
      this.dataSource = new MatTableDataSource<any>(this.results);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.sort);
    })
  }


  changeCaseFirstCharater(txt) {
    return txt.charAt(0).toLowerCase() + txt.slice(1); 
  }

  applyFilter(filterValue : string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


