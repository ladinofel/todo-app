import { taskLibrary } from "./taskFactory";

const taskDrawer = (() => {
  const container = document.getElementById('task-container');
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('visual-task');
  const title = document.createElement('p');
  const description = document.createElement('p');
  const project = document.createElement('p');
  const date = document.createElement('p');
  const priority = document.createElement('p');
  title.textContent = `Title: ${taskLibrary[taskLibrary.length - 1].title}`;
  description.textContent = `Description: ${taskLibrary[taskLibrary.length - 1].description}`;
  project.textContent = `Project: ${taskLibrary[taskLibrary.length - 1].project}`;
  date.textContent = `Due Date: ${taskLibrary[taskLibrary.length - 1].dueDate}`;
  priority.textContent = `Priority ${taskLibrary[taskLibrary.length - 1].priority}`;
  taskContainer.append(title, description, project, date, priority);
  container.append(taskContainer);
})

export default taskDrawer;
