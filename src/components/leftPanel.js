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
  allInput.checked = true;
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

  const allProjectsDisplay = document.createElement('div');
  allProjectsDisplay.classList.add('display-option');
  const allProjectsLabel = document.createElement('label');
  allProjectsLabel.classList.add('switch');
  const allProjectsInput = document.createElement('input');
  allProjectsInput.setAttribute('type', 'checkbox');
  allProjectsInput.id = 'switch-work';
  allProjectsInput.checked = true;
  const allProjectsSpan = document.createElement('span');
  allProjectsSpan.classList.add('slider-round');
  const allProjectsDisplayTitle = document.createElement('p');
  allProjectsDisplayTitle.textContent = 'All';

  allProjectsLabel.append(allProjectsInput, allProjectsSpan);
  allProjectsDisplay.append(allProjectsLabel, allProjectsDisplayTitle);
  
  const workDisplay = document.createElement('div');
  workDisplay.classList.add('display-option');
  const workLabel = document.createElement('label');
  workLabel.classList.add('switch');
  const workInput = document.createElement('input');
  workInput.setAttribute('type', 'checkbox');
  workInput.id = 'switch-work';
  const workSpan = document.createElement('span');
  workSpan.classList.add('slider-round');
  const workDisplayTitle = document.createElement('p');
  workDisplayTitle.textContent = 'Work';

  workLabel.append(workInput, workSpan);
  workDisplay.append(workLabel, workDisplayTitle);

  const homeDisplay = document.createElement('div');
  homeDisplay.classList.add('display-option');
  const homeLabel = document.createElement('label');
  homeLabel.classList.add('switch');
  const homeInput = document.createElement('input');
  homeInput.setAttribute('type', 'checkbox');
  homeInput.id = 'switch-home';
  const homeSpan = document.createElement('span');
  homeSpan.classList.add('slider-round');
  const homeDisplayTitle = document.createElement('p');
  homeDisplayTitle.textContent = 'Home';

  homeLabel.append(homeInput, homeSpan);
  homeDisplay.append(homeLabel, homeDisplayTitle);

  const schoolDisplay = document.createElement('div');
  schoolDisplay.classList.add('display-option');
  const schoolLabel = document.createElement('label');
  schoolLabel.classList.add('switch');
  const schoolInput = document.createElement('input');
  schoolInput.setAttribute('type', 'checkbox');
  schoolInput.id = 'switch-school';
  const schoolSpan = document.createElement('span');
  schoolSpan.classList.add('slider-round');
  const schoolDisplayTitle = document.createElement('p');
  schoolDisplayTitle.textContent = 'School';

  schoolLabel.append(schoolInput, schoolSpan);
  schoolDisplay.append(schoolLabel, schoolDisplayTitle);

  const personalDisplay = document.createElement('div');
  personalDisplay.classList.add('display-option');
  const personalLabel = document.createElement('label');
  personalLabel.classList.add('switch');
  const personalInput = document.createElement('input');
  personalInput.setAttribute('type', 'checkbox');
  personalInput.id = 'switch-personal';
  const personalSpan = document.createElement('span');
  personalSpan.classList.add('slider-round');
  const personalDisplayTitle = document.createElement('p');
  personalDisplayTitle.textContent = 'Personal';

  personalLabel.append(personalInput, personalSpan);
  personalDisplay.append(personalLabel, personalDisplayTitle);

  const otherDisplay = document.createElement('div');
  otherDisplay.classList.add('display-option');
  const otherLabel = document.createElement('label');
  otherLabel.classList.add('switch');
  const otherInput = document.createElement('input');
  otherInput.setAttribute('type', 'checkbox');
  otherInput.id = 'switch-other';
  const otherSpan = document.createElement('span');
  otherSpan.classList.add('slider-round');
  const otherDisplayTitle = document.createElement('p');
  otherDisplayTitle.textContent = 'Other';

  otherLabel.append(otherInput, otherSpan);
  otherDisplay.append(otherLabel, otherDisplayTitle);

  projectMenu.append(allProjectsDisplay, workDisplay, homeDisplay, schoolDisplay, personalDisplay, otherDisplay);
  leftColumn.append(projectMenu);

})();


export default (menuGenerator, projectGenerator);
