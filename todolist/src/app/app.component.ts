import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  task:string='';
  list_task: string[] = [];
  title = 'todolist';

  addTodo() {
    if (this.task == '') {
    }
    else {
      this.list_task.push(this.task);
      this.task = '';
    }
  }
  remove(taskremover:string){
    this.list_task=this.list_task.filter((task) => task !==taskremover)
  }


}
