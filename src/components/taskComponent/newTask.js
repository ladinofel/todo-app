
import taskCreator from "./taskFactory";
import newTaskForm from "./taskFormGenerator";

const newTaskGenerator = (() => {  
  const newTaskBtn = document.getElementById('new-task');
  newTaskBtn.addEventListener('click', () => {
  newTaskForm(); 
  taskCreator(); 
  });
})();

export default newTaskGenerator;  