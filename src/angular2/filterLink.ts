import {Component, ContentChildren, Inject, OnDestroy, OnInit} from 'angular2/core';
import {TodoActions} from './todoActions';

@Component({
  selector: 'filter-link',
  inputs: ['filter'],
  template: 
    `<a href="#" (click)="applyFilter(filter);"
        [ngClass]="{'active': active, 'inactive': !active}">` +
      `<ng-content></ng-content>` +  
    `</a>`
})
export class FilterLink implements OnInit, OnDestroy {
  @Inject('AppStore') appStore: AppStore;
  todoActions: TodoActions;
  active;
  filter;
  
  unsubscribe = this.appStore.subscribe(() =>
    this.updateActive());
  
  ngOnInit(){
    //set initial state
    this.updateActive();
  }
  
  ngOnDestroy(){
    //remove change listener
    this.unsubscribe();
  }
    
  // Helper methods
  applyFilter(filter) {
    this.appStore.dispatch(this.todoActions.setCurrentFilter(filter));
  }
  
  updateActive(){
    this.active = (this.filter == this.appStore.getState().currentFilter);
  }
}