/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(todo){
  return todo.text
}

const getPriority = function(todo){
  return todo.priority
}

const isComplete = function(todo){
  return todo.complete === true;
}

const isHighPriority = function(todo){
  return todo.priority === 2
}



const nameAndPriority = function(todo) {
  return `${todo.text} - ${todo.priority === 2 ? 'High' : 'Low'}`;
}

const isNotComplete = function(todo){
  return todo.complete !== true;
}

const isLowPriority = function(todo){
  return todo.priority === 1
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = (todos)=> 
todos.map((todo) => todo.text);

const priorities = (todos)=> 
todos.map((todo) => todo.priority);

const namesAndPriorities = function(todos) {
  return todos.map(nameAndPriority);
}


const justNotComplete = (todos)=> 
todos.filter(isNotComplete);

const justComplete = (todos)=>
todos.filter(isComplete);

const priority2Only = (todos)=>
todos.filter(isHighPriority);

const priority1Only = (todos)=>
todos.filter(isLowPriority);

















// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
