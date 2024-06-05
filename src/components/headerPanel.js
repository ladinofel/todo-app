import './headerPanel.css';
import Add from '/src/icons/add-circle-outline.svg';
import taskDrawer from './taskComponent/taskGUI';


const headerGenerator = (() => {

  const header = document.querySelector('#header');

  const headerSortOptions = document.createElement('div');
  headerSortOptions.classList.add('header-sort-options');

  const sortByTime = document.createElement('div');
  sortByTime.classList.add('sort-option');
  const timeLabel = document.createElement('label');
  timeLabel.classList.add('switch');
  const timeInput = document.createElement('input');
  timeInput.setAttribute('type', 'checkbox');
  timeInput.id = 'switch-time';
  timeInput.checked = true;
  const timeSpan = document.createElement('span');
  timeSpan.classList.add('slider-round');
  const sortTimeTitle = document.createElement('p');
  sortTimeTitle.textContent = 'Sort by time';

  const sortByPriority = document.createElement('div');
  sortByPriority.classList.add('sort-option');
  const priorityLabel = document.createElement('label');
  priorityLabel.classList.add('switch');
  const priorityInput = document.createElement('input');
  priorityInput.setAttribute('type', 'checkbox');
  priorityInput.id = 'switch-priority';
  const prioritySpan = document.createElement('span');
  prioritySpan.classList.add('slider-round');
  const sortPriorityTitle = document.createElement('p');
  sortPriorityTitle.textContent = 'Sort by priority';

  priorityLabel.append(priorityInput, prioritySpan);
  sortByPriority.append(priorityLabel, sortPriorityTitle);
  timeLabel.append(timeInput, timeSpan);
  sortByTime.append(timeLabel, sortTimeTitle);
  headerSortOptions.append(sortByTime, sortByPriority);


  const headerOptions = document.createElement('div');
  headerOptions.classList.add('header-options');

  const newProject = document.createElement('div');
  newProject.classList.add('header-option');
  const projectIcon = new Image();
  projectIcon.src = Add;
  const newProjectTitle = document.createElement('a');
  newProjectTitle.classList.add('icon-text');
  newProjectTitle.id = 'new-project';
  newProjectTitle.textContent = 'New Project';

  const newTask = document.createElement('div');
  newTask.classList.add('header-option');
  const taskIcon = new Image();
  taskIcon.src = Add;
  const newTaskTitle = document.createElement('a');
  newTaskTitle.classList.add('icon-text');
  newTaskTitle.id = 'new-task';
  newTaskTitle.textContent = 'New Task';

  newProject.append(projectIcon, newProjectTitle);
  newTask.append(taskIcon, newTaskTitle);
  headerOptions.append(newProject, newTask);
  header.append(headerSortOptions, headerOptions);


})();

const switchLogic = (() => {  
  const switchPriority = document.getElementById('switch-priority');
  const switchTime = document.getElementById('switch-time');  

  switchPriority.addEventListener('click', () => {
    switchTime.checked = !switchPriority.checked;
    taskDrawer();
    console.log('Sort by priority is ON');
    console.log(switchTime.checked);
  });

  switchTime.addEventListener('click', () => {
    switchPriority.checked = !switchTime.checked;
    taskDrawer();
    console.log('Sort by time is ON');
    console.log(switchPriority.checked);
  });
  

})();

export default headerGenerator; switchLogic;