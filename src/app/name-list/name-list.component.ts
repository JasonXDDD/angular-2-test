import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css'],

})
export class NameListComponent implements OnInit {

  @Input()
  item: any;

  constructor() { }

  ngOnInit() {
  }

}
