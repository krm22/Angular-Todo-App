function TodoController(){
  this.list = [{
    title: 'First todo item!',
    completed: false
  },{
    title: 'Second todo item!',
    completed: false
  },{
    title: 'Third todo item!',
    completed: false
  }];



  }//end of Todo Function.


TodoController.$inject = [];

angular
  .module('app')
  .controller('TodoController', TodoController);
