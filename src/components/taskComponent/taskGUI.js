import Done from './taskIcons/checkmark-outline.svg';
import Edit from './taskIcons/document-text-outline.svg';
import Delete from './taskIcons/trash-outline.svg';
import { taskLibrary } from "./taskFactory";

const taskDrawer = (() => {
  const container = document.getElementById('task-container');
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('visual-task');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('sub-container');
  titleContainer.id = 'title-sub-container';
  const title = document.createElement('p');
  title.classList.add('task-sub-heading');
  const titleInfo = document.createElement('p');
  title.textContent = 'Task: ';
  titleInfo.textContent = `${taskLibrary[taskLibrary.length - 1].title}`;
  titleContainer.append(title, titleInfo);

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('sub-container');
  descriptionContainer.id = 'description-sub-container';
  const description = document.createElement('p');
  description.classList.add('task-sub-heading');
  const descriptionInfo = document.createElement('p');
  description.textContent = 'Description: ';
  descriptionInfo.textContent = `${taskLibrary[taskLibrary.length - 1].description}`;
  descriptionContainer.append(description, descriptionInfo);

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('sub-container');
  projectContainer.id = 'project-sub-container';
  const project = document.createElement('p');
  project.classList.add('task-sub-heading');
  const projectInfo = document.createElement('p');
  project.textContent = 'Project: ';
  projectInfo.textContent = `${taskLibrary[taskLibrary.length - 1].project}`;
  projectContainer.append(project, projectInfo);

  const dateContainer = document.createElement('div');
  dateContainer.classList.add('sub-container');
  dateContainer.id = 'date-sub-container';
  const date = document.createElement('p');
  date.classList.add('task-sub-heading');
  const dateInfo = document.createElement('p');
  date.textContent = 'Due Date: ';
  dateInfo.textContent = `${taskLibrary[taskLibrary.length - 1].dueDate}`;
  dateContainer.append(date, dateInfo);

  const priorityContainer = document.createElement('div'); 
  priorityContainer.classList.add('sub-container');
  priorityContainer.id = 'priority-sub-container'; 
  const priority = document.createElement('p');
  priority.classList.add('task-sub-heading');
  const priorityInfo = document.createElement('p');
  priority.textContent = 'Priority: ';
  priorityInfo.textContent = `${taskLibrary[taskLibrary.length - 1].priority}`;
  priorityContainer.append(priority, priorityInfo);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('sub-container');
  btnContainer.id = 'btn-sub-container';
  const doneIcon = new Image();
  doneIcon.src = Done;
  doneIcon.classList.add('task-icons');
  const editIcon = new Image();
  editIcon.src = Edit;
  editIcon.classList.add('task-icons');
  const deleteIcon = new Image();
  deleteIcon.src = Delete;
  deleteIcon.classList.add('task-icons');
  btnContainer.append(doneIcon, editIcon, deleteIcon);

   
  (titleInfo, descriptionInfo, projectInfo, dateInfo, priorityInfo).classList.add('task-text');
  
  taskContainer.append(titleContainer, descriptionContainer, projectContainer, dateContainer, priorityContainer, btnContainer);
  container.append(taskContainer);
})

export default taskDrawer;
