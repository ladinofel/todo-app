import taskDrawer from "./taskGUI";

const taskFactory = (title, description, project, dueDate, priority) => {
  return {title, description, project, dueDate, priority};
};

let taskLibrary = [];

const taskCreator = (() => {  
  const taskForm = document.getElementById('task-form');
  const modal = document.querySelector('#modal');  
  const submitBtn = document.getElementById('submit-btn');
  const submitHandler = (() => {
    if(taskForm.checkValidity()){
      let taskTitle = document.getElementById('task-title').value;
      let taskDescription = document.getElementById('task-description').value;
      let taskProject = document.getElementById('task-project').value;
      let taskDueDate = document.getElementById('task-due-date').value;
      let taskPriority = document.getElementById('task-priority').value;
      const freshTask = taskFactory(taskTitle, taskDescription, taskProject,taskDueDate, taskPriority);
      taskLibrary.push(freshTask);
      console.log(taskLibrary);
      taskForm.reset();
      modal.close();
      submitBtn.removeEventListener('click', submitHandler);
      taskDrawer(taskLibrary);
      } else {    
      taskForm.reportValidity();
      };
    });
    
    submitBtn.addEventListener('click', submitHandler);
  });

    
  


export default taskCreator;
export {taskLibrary};