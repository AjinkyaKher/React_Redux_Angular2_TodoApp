import {Component, Inject} from 'angular2/core';
import {TodoActions} from './todoActions';
// import {AppStore} from './main'; 

@Component({
  selector: 'add-todo', 
  template: 
    `<div>
      <input #todo>
      <button (click)="addTodo(todo)">Add todo</button>
    </div>`
})

export class AddTodo {
  // constructor( @Inject('ngRedux') ngRedux) {
  //   this.unsubscribe = ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);
  // }
  // onInit() {}
 
  // onDestroy() {
  //   this.unsubscribe();
  // }
 
  // mapStateToThis(state) {
  //   return {
  //     counter: state.counter
  //   };
  // }
 
  // mapDispatchToThis(dispatch) {
  //   return { actions: bindActionCreators(CounterActions, dispatch) };
  // }
  
  constructor(
    @Inject('AppStore') private appStore: AppStore, 
    private todoActions: TodoActions
  ){ }
  
  private addTodo(input) {
    this.appStore.dispatch(this.todoActions.addTodo(input.value));
    input.value = '';
  }
}