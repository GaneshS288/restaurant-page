import './style.css'
import CrownImg from './crown.jpg'
import { renderHeader } from './renderHeader.js'
import { renderFooter } from './renderFooter.js';
import { renderHome } from './renderHome.js'
import { renderMenu } from './renderMenu.js'

renderHeader(CrownImg);
renderFooter();
renderHome();

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', () => {
    const content = document.querySelector('.content');
    (document.querySelectorAll('.content > *')).forEach((childnode) => {
        content.removeChild(childnode);
    })

    renderHome();
} )

const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    const content = document.querySelector('.content');
    (document.querySelectorAll('.content > *')).forEach((childnode) => {
        content.removeChild(childnode);
    })

    renderMenu();
} )