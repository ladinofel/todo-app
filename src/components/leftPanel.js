import Today from '/src/icons/today-outline.svg';
import Week from '/src/icons/calendar-outline.svg';
import Month from '/src/icons/calendar-number-outline.svg';
import Sometime from '/src/icons/time-outline.svg';
import Project from '/src/icons/grid-outline.svg';


const menuGenerator = (() => {

  const leftColumn = document.querySelector('#left-column');

  const leftMenu = document.createElement('div');
  leftMenu.classList.add('left-menu');

  const displayAll = document.createElement('div');
  displayAll.classList.add('display-option');
  const allLabel = document.createElement('label');
  allLabel.classList.add('switch');
  const allInput = document.createElement('input');
  allInput.setAttribute('type', 'checkbox');
  allInput.id = 'switch-all';
  const allSpan = document.createElement('span');
  allSpan.classList.add('slider-round');
  const displayAllTitle = document.createElement('p');
  displayAllTitle.textContent = 'All';

  allLabel.append(allInput, allSpan);
  displayAll.append(allLabel, displayAllTitle);

  const displayToday = document.createElement('div');
  displayToday.classList.add('display-option');
  const todayLabel = document.createElement('label');
  todayLabel.classList.add('switch');
  const todayInput = document.createElement('input');
  todayInput.setAttribute('type', 'checkbox');
  todayInput.id = 'switch-today';
  const todaySpan = document.createElement('span');
  todaySpan.classList.add('slider-round');
  const displayTodayTitle = document.createElement('p');
  displayTodayTitle.textContent = 'Today';

  todayLabel.append(todayInput, todaySpan);
  displayToday.append(todayLabel, displayTodayTitle);

  const displayWeek = document.createElement('div');
  displayWeek.classList.add('display-option');
  const weekLabel = document.createElement('label');
  weekLabel.classList.add('switch');
  const weekInput = document.createElement('input');
  weekInput.setAttribute('type', 'checkbox');
  weekInput.id = 'switch-week';
  const weekSpan = document.createElement('span');
  weekSpan.classList.add('slider-round');
  const displayWeekTitle = document.createElement('p');
  displayWeekTitle.textContent = 'This week';

  weekLabel.append(weekInput, weekSpan);
  displayWeek.append(weekLabel, displayWeekTitle);

  const displayMonth = document.createElement('div');
  displayMonth.classList.add('display-option');
  const monthLabel = document.createElement('label');
  monthLabel.classList.add('switch');
  const monthInput = document.createElement('input');
  monthInput.setAttribute('type', 'checkbox');
  monthInput.id = 'switch-month';
  const monthSpan = document.createElement('span');
  monthSpan.classList.add('slider-round');
  const displayMonthTitle = document.createElement('p');
  displayMonthTitle.textContent = 'This month';

  monthLabel.append(monthInput, monthSpan);
  displayMonth.append(monthLabel, displayMonthTitle);

  const displayFuture = document.createElement('div');
  displayFuture.classList.add('display-option');
  const futureLabel = document.createElement('label');
  futureLabel.classList.add('switch');
  const futureInput = document.createElement('input');
  futureInput.setAttribute('type', 'checkbox');
  futureInput.id = 'switch-future';
  const futureSpan = document.createElement('span');
  futureSpan.classList.add('slider-round');
  const displayFutureTitle = document.createElement('p');
  displayFutureTitle.textContent = 'Into the future';

  futureLabel.append(futureInput, futureSpan);
  displayFuture.append(futureLabel, displayFutureTitle);

  leftMenu.append(displayAll, displayToday, displayWeek, displayMonth, displayFuture);
  leftColumn.append(leftMenu);

})();

const projectGenerator = (() => {

  const leftColumn = document.querySelector('#left-column');

  const projectMenu = document.createElement('div');
  projectMenu.classList.add('project-menu');

  const projectHeader = document.createElement('div');
  projectHeader.classList.add('project-header');
  const projectIcon = new Image();
  projectIcon.src = Project;
  const projectTitle = document.createElement('p');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = 'PROJECTS';

  projectHeader.append(projectIcon, projectTitle);
  projectMenu.append(projectHeader);
  leftColumn.append(projectMenu);

})();


export default (menuGenerator, projectGenerator);
