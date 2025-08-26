import './style.css'
import Header, { setupThemeToggle } from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { setupModals } from './components/Modal';
import { setupForms } from './components/Forms';


// Quick and dirty - not for production!
const render = (html) => {
  const app = document.querySelector('#app');
  app.innerHTML = html;
  setupThemeToggle();
  setupModals();
  setupForms();
}


render(`
  ${Header}
  ${Main}
  ${Footer}
`);



