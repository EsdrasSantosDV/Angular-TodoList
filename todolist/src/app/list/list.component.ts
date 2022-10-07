import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  @Input() list_task: string[] = [];
  @Output() tasktoremove=new EventEmitter<string>();
  task_detail:string='';
  constructor() { }

  ngOnInit(): void {
  }


  tasktoremovetask(taskremover:string) {
    console.log(taskremover)
    this.tasktoremove.emit(taskremover)

  }
}
