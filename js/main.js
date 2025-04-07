import sidebar from './sidebar.js';
import Posting from './posting.js';

const sideBar = document.querySelector('#sideBar');

const routes = {
  '/sidebar': new sidebar(),
  '/': new Posting(),
};

const postingSection = document.querySelector('.postingSection');

sideBar.innerHTML = routes['/sidebar'].render();
postingSection.innerHTML = routes['/'].render();
