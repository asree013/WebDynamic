import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-waiver-home',
  templateUrl: './waiver-home.component.html',
  styleUrls: ['./waiver-home.component.css']
})
export class WaiverHomeComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort!: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator

  constructor() { }
  ngOnInit(): void {
    this.sort = this.sort
    this.paginator = this.paginator

  }

}
