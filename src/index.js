import './style.css'
import CrownImg from './crown.jpg'
import { renderHeader } from './renderHeader.js'
import { renderFooter } from './renderFooter.js';
import { renderHome } from './renderHome.js'
import { renderMenu } from './renderMenu.js'
import { renderAbout } from './renderAbout.js';

renderHeader(CrownImg);
renderFooter();
renderHome();

function removeContent() {
    const content = document.querySelector('.content');
    (document.querySelectorAll('.content > *')).forEach((childnode) => {
        content.removeChild(childnode);
    });
}

const homeButton = document.querySelector('.home');
homeButton.classList.add('selected');

homeButton.addEventListener('click', () => {
    removeContent();
    renderHome();
    homeButton.classList.add('selected');
    menuButton.classList.remove('selected');
    aboutButton.classList.remove('selected');
} )

const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    removeContent();
    renderMenu();

    homeButton.classList.remove('selected');
    menuButton.classList.add('selected');
    aboutButton.classList.remove('selected');
} )

const aboutButton = document.querySelector('.about');

aboutButton.addEventListener('click', () => {
    removeContent();
    renderAbout();

    homeButton.classList.remove('selected');
    menuButton.classList.remove('selected');
    aboutButton.classList.add('selected');
})