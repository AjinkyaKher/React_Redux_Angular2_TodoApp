import {Component, Inject, OnDestroy} from 'angular2/core';
import {Todo} from './todo';
import {VisibleTodosPipe} from './visibleTodosPipe';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <todo 
        *ngFor="#todo of todos | visibleTodos:currentFilter"
        [completed]="todo.completed"
        [id]="todo.id"
      >{{todo.text}}</todo>
    </ul>
  `,
  directives: [Todo], 
  pipes: [VisibleTodosPipe]
})
export class TodoList implements OnDestroy {
  // constructor(
  //   // @Inject('AppStore') private appStore: AppStore
  // ){
  @Inject('AppStore') appStore: AppStore;
  currentFilter;
  todos;
  
  unsubscribe = this.appStore.subscribe(()=> {
      let state = this.appStore.getState();
      this.currentFilter = state.currentFilter;
      this.todos = state.todos;
    });
  
  ngOnDestroy(){
    //remove listener
    this.unsubscribe();
  }
}

