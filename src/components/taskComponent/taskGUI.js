import Done from './taskIcons/checkmark-outline.svg';
import Edit from './taskIcons/document-text-outline.svg';
import Delete from './taskIcons/trash-outline.svg';
import { taskLibrary } from "./taskFactory";

const taskDrawer = (() => {
 
  const unitDrawer = ((array) => {
    const container = document.getElementById('task-container');  
    const clearContainer = (() => {
      while (container.firstChild){
        container.removeChild(container.firstChild);
    };
    });
    clearContainer();
    for(let i = 0; i < array.length; i++){    
      const taskContainer = document.createElement('div');  
      taskContainer.classList.add('visual-task');
      const titleContainer = document.createElement('div');
      titleContainer.classList.add('sub-container');
      titleContainer.id = 'title-sub-container';
      const title = document.createElement('p');
      title.classList.add('task-sub-heading');
      const titleInfo = document.createElement('p');
      title.textContent = 'Task: ';
      titleInfo.textContent = `${array[i].title}`;
      titleContainer.append(title, titleInfo);

      const descriptionContainer = document.createElement('div');
      descriptionContainer.classList.add('sub-container');
      descriptionContainer.id = 'description-sub-container';
      const description = document.createElement('p');
      description.classList.add('task-sub-heading');
      const descriptionInfo = document.createElement('p');
      description.textContent = 'Description: ';
      descriptionInfo.textContent = `${array[i].description}`;
      descriptionContainer.append(description, descriptionInfo);

      const projectContainer = document.createElement('div');
      projectContainer.classList.add('sub-container');
      projectContainer.id = 'project-sub-container';
      const project = document.createElement('p');
      project.classList.add('task-sub-heading');
      const projectInfo = document.createElement('p');
      project.textContent = 'Project: ';
      projectInfo.textContent = `${array[i].project}`;
      projectContainer.append(project, projectInfo);

      const dateContainer = document.createElement('div');
      dateContainer.classList.add('sub-container');
      dateContainer.id = 'date-sub-container';
      const date = document.createElement('p');
      date.classList.add('task-sub-heading');
      const dateInfo = document.createElement('p');
      date.textContent = 'Due Date: ';
      dateInfo.textContent = `${array[i].dueDate}`;
      dateContainer.append(date, dateInfo);

      const priorityContainer = document.createElement('div'); 
      priorityContainer.classList.add('sub-container');
      priorityContainer.id = 'priority-sub-container'; 
      const priority = document.createElement('p');
      priority.classList.add('task-sub-heading');
      const priorityInfo = document.createElement('p');
      priority.textContent = 'Priority: ';
      priorityInfo.textContent = `${array[i].priority}`;
      if(array[i].priority == "1. High"){
        taskContainer.style.backgroundColor = '#fad9d9';
      } else if(array[i].priority == "2. Medium"){
        taskContainer.style.backgroundColor = '#ffe9d6';
      } else {
        taskContainer.style.backgroundColor = '#e6eefc';
      }  
      priorityContainer.append(priority, priorityInfo);

      const btnContainer = document.createElement('div');
      btnContainer.classList.add('sub-container');
      btnContainer.id = 'btn-sub-container';
      const doneIcon = new Image();
      doneIcon.src = Done;
      doneIcon.classList.add('task-icons');
      doneIcon.id = 'done-icon';
      const editIcon = new Image();
      editIcon.src = Edit;
      editIcon.classList.add('task-icons');
      editIcon.id = 'edit-icon';
      const deleteIcon = new Image();
      deleteIcon.src = Delete;
      deleteIcon.classList.add('task-icons');
      deleteIcon.id='delete-icon';
      btnContainer.append(doneIcon, editIcon, deleteIcon);
    
      (titleInfo, descriptionInfo, projectInfo, dateInfo, priorityInfo).classList.add('task-text');
      taskContainer.append(titleContainer, descriptionContainer, projectContainer, dateContainer, priorityContainer, btnContainer);
      container.append(taskContainer);
    };
  });

  const sortChecker = (() => {
    const switchPriority = document.getElementById('switch-priority');
    const arrayLibrary = Array.from(taskLibrary);
    if(switchPriority.checked){      
      arrayLibrary.sort((a,b) => {
      const priorityComparison = a.priority[0] - b.priority[0];
      if(priorityComparison !== 0){
      return priorityComparison;
      }
      return new Date(a.dueDate) - new Date(b.dueDate);
      });
      unitDrawer(arrayLibrary);
    } else {
      arrayLibrary.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate));
      unitDrawer(arrayLibrary);
    }
  }); 
  sortChecker();
  });

  
export default taskDrawer;
