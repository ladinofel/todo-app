import Today from '/src/icons/today-outline.svg';
import Week from '/src/icons/calendar-outline.svg';
import Month from '/src/icons/calendar-number-outline.svg';
import Sometime from '/src/icons/time-outline.svg';

const menuGenerator = (() => {


const leftColumn = document.querySelector('#left-column');

const leftMenu = document.createElement('div');
leftMenu.classList.add('left-menu');

const today = document.createElement('div');
today.classList.add('menu-icon');
const todayIcon = new Image();
todayIcon.src = Today;
const todayText = document.createElement('a');
todayText.textContent = 'Today';
todayText.classList.add('icon-text');
today.append(todayIcon, todayText);

const week = document.createElement('div');
week.classList.add('menu-icon');
const weekIcon = new Image();
weekIcon.src = Week;
const weekText = document.createElement('a');
weekText.textContent = 'This week';
weekText.classList.add('icon-text');
week.append(weekIcon, weekText);


const month = document.createElement('div');
month.classList.add('menu-icon');
const monthIcon = new Image();
monthIcon.src = Month;
const monthText = document.createElement('a');
monthText.textContent = 'This month';
monthText.classList.add('icon-text');
month.append(monthIcon, monthText);

const sometime = document.createElement('div');
sometime.classList.add('menu-icon');
const sometimeIcon = new Image();
sometimeIcon.src = Sometime;
const sometimeText = document.createElement('a');
sometimeText.textContent = 'Sometime';
sometimeText.classList.add('icon-text');
sometime.append(sometimeIcon, sometimeText);



leftMenu.append(today, week, month, sometime);
leftColumn.append(leftMenu);

})();

export default menuGenerator;