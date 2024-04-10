
const taskFactory = (title, description, project, dueDate, priority) => {
  return {title, description, project, dueDate, priority};
};

const taskCreator = (() => {
  const taskForm = document.getElementById('task-form');
  const modal = document.querySelector('#modal');
  let taskLibrary = [];
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', () => {
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

  });
});

export default taskCreator;