import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  @Input() list_task: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }









}
