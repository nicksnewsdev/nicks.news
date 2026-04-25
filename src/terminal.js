import { ABOUT } from './pages/about.js';
import { EXPERIENCE } from './pages/experience.js';
import { PROJECTS } from './pages/projects.js';

const LIGHT_ICON = `<svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" height="14" width="14"><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0" stroke-width="2"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1M5.6 5.6l0.7 0.7m12.1 -0.7 -0.7 0.7m0 11.4 0.7 0.7m-12.1 -0.7 -0.7 0.7" stroke-width="2"></path></svg>`;
const DARK_ICON = `<svg class='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" height="14" width="14"><path d="m12 3 0.393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z" stroke-width="2"></path></svg>`;

const TERMINAL_DIV = document.getElementById('terminal');

const PAGES = () => {
    const HASH = window.location.hash || '#about';
    const CONTENT_DIV = document.getElementById('content');
    
    if (!CONTENT_DIV) return;

    if (HASH === '#about') CONTENT_DIV.innerHTML = ABOUT();
    else if (HASH === '#experience') CONTENT_DIV.innerHTML = EXPERIENCE();
    else if (HASH === '#projects') CONTENT_DIV.innerHTML = PROJECTS();
};

window.addEventListener('hashchange', PAGES);

const TOGGLE_THEME = () => {
    const ITEM = document.documentElement;
    const THEME_DIV = document.getElementById('theme');
    const THEME_TOGGLE = document.getElementById('theme_toggle');
    const IS_DARK = ITEM.dataset.theme === 'Dark';
    const THEME = IS_DARK ? 'Light' : 'Dark';
    
    ITEM.dataset.theme = THEME;
    localStorage.setItem('theme', THEME);

    if (THEME_DIV) THEME_DIV.innerHTML = THEME;

    const THEME_ICON_REMOVE = THEME_TOGGLE.querySelector('.icon');
    if (THEME_ICON_REMOVE) {
        THEME_ICON_REMOVE.remove();
        THEME_TOGGLE.insertAdjacentHTML('afterbegin', THEME === 'Dark' ? DARK_ICON : LIGHT_ICON);
    }
};

document.documentElement.dataset.theme = localStorage.getItem('theme') || 'Dark';

const TERMINAL = () => {
    const THEME = document.documentElement.dataset.theme;
    const THEME_ICON = THEME === 'Dark' ? DARK_ICON : LIGHT_ICON;

    TERMINAL_DIV.innerHTML = `
    <div class='terminal'>
        <div class='navigation'>
            <nav class='controls'> 
                <a href='#about' class='controls_element'> 
                    <svg class='icon' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" height="14" width="14"><path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0 -8 0" stroke-width="2"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" stroke-width="2"></path></svg>
                    <span>About</span>
                </a>
                <a href='#experience' class='controls_element'> 
                    <svg class='icon' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" height="14" width="14"><path d="M19 4v16H7a2 2 0 0 1 -2 -2V6a2 2 0 0 1 2 -2h12z" stroke-width="2"></path><path d="M19 16H7a2 2 0 0 0 -2 2" stroke-width="2"></path><path d="M9 8h6" stroke-width="2"></path></svg>
                    <span>Experience</span>
                </a>
                <a href='#projects' class='controls_element'> 
                    <svg class='icon' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" height="14" width="14"><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2V6a2 2 0 0 1 2 -2" stroke-width="2"></path></svg>
                    <span>Projects</span>
                </a>
            </nav>
            <a id='theme_toggle' class='theme_element'> 
                ${THEME_ICON}
                <span id='theme'>${THEME}</span>
            </a>
        </div>
        <div id='content' class='content'></div>
    </div>
    <div class='information'></div>
    `;

    const THEME_TOGGLE = document.getElementById('theme_toggle');
    THEME_TOGGLE.addEventListener('click', TOGGLE_THEME);

    const CONTROLS = document.querySelectorAll('.controls_element');
    CONTROLS.forEach(page => {
        page.addEventListener('click', (element) => {
            CONTROLS.forEach(p => p.classList.remove('active'));
            element.currentTarget.classList.add('active');
        });
    });

    const PAGES_LOAD = () => {
        const HASH = window.location.hash || '#about';
        const PAGE = document.querySelector(`.controls_element[href="${HASH}"]`);
        if (PAGE) PAGE.classList.add('active');
    };

    const TIME = () => {
        const INFORMATION_DIV = document.querySelector('.information');
        if (!INFORMATION_DIV) return;
        const NOW = new Date();
        INFORMATION_DIV.innerHTML = `${NOW.toLocaleTimeString()} <a href='https://www.streamlinehq.com/' target='_blank' rel='noopener noreferrer' class='credit'>Icons on Streamlinehq</a>`;
    }; 

    TIME();
    setInterval(TIME, 1000);
    PAGES_LOAD();
    PAGES();
};

TERMINAL();