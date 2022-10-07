import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-profiles-edit',
  templateUrl: './profiles-edit.component.html',
  styleUrls: ['./profiles-edit.component.css']
})
export class ProfilesEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
