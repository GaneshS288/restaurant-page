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

homeButton.addEventListener('click', () => {
    removeContent();
    renderHome();
} )

const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    removeContent();
    renderMenu();
} )

const aboutButton = document.querySelector('.about');

aboutButton.addEventListener('click', () => {
    removeContent();
    renderAbout();
})