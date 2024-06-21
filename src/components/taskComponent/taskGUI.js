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

  const projectChecker = ((array) => {
    const displayAllProjects = document.getElementById('switch-all-projects')
    const displayWork = document.getElementById('switch-work');
    const displayHome = document.getElementById('switch-home');
    const displaySchool = document.getElementById('switch-school');
    //const displayPersonal = document.getElementById('switch-personal');
    const displayOther = document.getElementById('switch-other');

    if (displayAllProjects.checked){
      unitDrawer(array);
    } else if (displayWork.checked){
      const filterByWork = ((array) => {
        return array.filter(task => {
          return task.project === 'Work';
        });
      });
      const tasksByWork = filterByWork(array);
      unitDrawer(tasksByWork);
    } else if (displayHome.checked){
      const filterByHome = ((array) => {
        return array.filter(task => {
          return task.project === 'Home';
        });
      });
      const tasksByHome = filterByHome(array);
      unitDrawer(tasksByHome);
    } else if (displaySchool.checked){
      const filterBySchool = ((array) => {
        return array.filter(task => {
          return task.project === 'School';
        });
      });
      const tasksBySchool = filterBySchool(array);
      unitDrawer(tasksBySchool);
    } else if (displayOther.checked){
      const filterByOther = ((array) => {
        return array.filter(task => {
          return task.project === 'Other';
        });
      });
      const tasksByOther = filterByOther(array);
      unitDrawer(tasksByOther);
    };    
  });

  const timeChecker = ((array) => {
    const displayAll = document.getElementById('switch-all-time');
    const displayToday = document.getElementById('switch-today');
    const displayWeek = document.getElementById('switch-week');
    const displayMonth = document.getElementById('switch-month');
    const displayFuture = document.getElementById('switch-future');

    if(displayAll.checked){
      projectChecker(array);
    } else if (displayToday.checked){
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const formattedToday = `${year}-${month}-${day}`;
      const tasksToday = array.filter(task => task.dueDate === formattedToday);
      projectChecker(tasksToday);  

    } else if (displayWeek.checked){
      const calculateWeek = (() => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() + diffToMonday);
        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);

        return {startOfWeek, endOfWeek};
      });

      const filterByWeek = ((array) => {
        const { startOfWeek, endOfWeek} = calculateWeek();
        
        return array.filter(task => {
          const taskDate = new Date(task.dueDate);
          return taskDate >= startOfWeek && taskDate <= endOfWeek;
        });
      });
      const tasksDueThisWeek = filterByWeek(array);
      projectChecker(tasksDueThisWeek);

    } else if (displayMonth.checked){
      const calculateMonthYear = (() => {
        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currentYear = today.getFullYear();
        return {currentMonth, currentYear};
      });

      const filterByMonth = ((array) => {
        const {currentMonth, currentYear} = calculateMonthYear();

        return array.filter(task => {
          const taskDate = new Date(task.dueDate);
          const taskMonth = taskDate.getMonth() + 1;
          const taskYear = taskDate.getFullYear();
          return taskMonth === currentMonth && taskYear === currentYear;
        });
      });
      const tasksDueThisMonth = filterByMonth(array);
      projectChecker(tasksDueThisMonth);
    } else if (displayFuture.checked){
      const calculateMonthYear = (() => {
        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currentYear = today.getFullYear();
        return {currentMonth, currentYear};
      });

      const filterByFuture = ((array) => {
        const {currentMonth, currentYear} = calculateMonthYear();

        return array.filter(task => {
          const taskDate = new Date(task.dueDate);
          const taskMonth = taskDate.getMonth() + 1;
          const taskYear = taskDate.getFullYear();
          return taskYear > currentYear || (taskYear === currentYear && taskMonth > currentMonth);
        });        
      });
      const tasksDueFuture = filterByFuture(array);
      projectChecker(tasksDueFuture);
    }
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
      timeChecker(arrayLibrary);
      //unitDrawer(arrayLibrary);
    } else {
      arrayLibrary.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate));
      timeChecker(arrayLibrary);
      //unitDrawer(arrayLibrary);
    }
  }); 
  sortChecker();

  const timeOptionsTrigger = (() => {
    const timeOptions = document.querySelectorAll('.time-option');
    timeOptions.forEach(button => {
      button.addEventListener('click', () => {
        sortChecker();
      });
    });
  });
  timeOptionsTrigger();

  const projectOptionsTrigger = (() => {
    const projectOptions = document.querySelectorAll('.project-option');
    projectOptions.forEach(button => {
      button.addEventListener('click', () => {
        sortChecker();
      });
    });
  });
  projectOptionsTrigger();
  
});



  
export default taskDrawer;
