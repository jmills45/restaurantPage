// Import modules, tabs, and images
import gitHubIcon from '../images/github.svg';
import odinLogo from '../images/odinLogo.png';
import { createHomeTab } from './homeTab.js';
import { createMenuTab } from './menuTab.js';
import { createContactTab } from './contactTab.js';

let activeTab = 'home';

function changeTab(tab) {
    activeTab = tab.target.dataset.tab;
    clearTab();
    generatePageLayout();
    markActiveTab();
}

function clearTab(){
    const contentElement = document.querySelector('.content');
    while(contentElement.firstChild){
        contentElement.removeChild(contentElement.firstChild);
    }
}

function markActiveTab(){
    const targetTab = `[data-tab="${activeTab}"]`
    const activeTabElement = document.querySelector(targetTab)
    activeTabElement.classList.add('activeTab');
}

// appends all child elements into parent element
function appendAllElements(parentElement, ...children){
    children.forEach((child) => {
        parentElement.appendChild(child);
    })
}

// Generate page layout
function generatePageLayout(){
    // Get page body and content section
    const pageBody = document.querySelector('body');
    const pageContent = document.querySelector('.content');

    const header = createPageHeader();
    const navbar = createNavbar();
    const main = createPageMain(activeTab);
    const footer = createPageFooter();

    appendAllElements(pageContent, header, navbar, main, footer)
}

 // Create page header
function createPageHeader() {
    // Create Header Element
    const pageHeader = document.createElement('header');

    // Create wrapper for logo and title
    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('titleWrapper');

    const headerLogo = document.createElement('img');
    headerLogo.src = odinLogo;

    const headerTitle = document.createElement('h1');
    headerTitle.innerText = 'The Odin Pub';

    appendAllElements(titleWrapper, headerLogo, headerTitle);
 
    // Append title and navbar into header
    appendAllElements(pageHeader, titleWrapper);

    return pageHeader;
}

function createNavbar() {
    // Create navbar element
    const navbar = document.createElement('nav');

    // Create navbar links / tabs
    const navbarHome = document.createElement('div');
    navbarHome.addEventListener('click', changeTab);
    navbarHome.dataset.tab = 'home';
    navbarHome.innerText = 'Home';

    const navbarMenu = document.createElement('div');
    navbarMenu.addEventListener('click', changeTab);
    navbarMenu.dataset.tab = 'menu';
    navbarMenu.innerText = 'Menu';

    const navbarContact = document.createElement('div');
    navbarContact.addEventListener('click', changeTab);
    navbarContact.dataset.tab = 'contact';
    navbarContact.innerText = 'Contact';

    // Append all navbar links into navbar
    appendAllElements(navbar, navbarHome, navbarMenu, navbarContact);

    return navbar;
}

// Create page main
function createPageMain(activeTab) {
    const pageMain = document.createElement('main');

    if (activeTab === 'home'){
        pageMain.appendChild(createHomeTab());
    }

    if (activeTab === 'menu') {
        pageMain.appendChild(createMenuTab());
    }

    if (activeTab === 'contact') {
        pageMain.appendChild(createContactTab());
    }

    return pageMain;
}

// create page footer
function createPageFooter() {
    const pageFooter = document.createElement('footer');

    const gitHubLogo = document.createElement('img');
    gitHubLogo.src = gitHubIcon;
    gitHubLogo.alt = 'github logo'

    const footerMessage = document.createElement('p')
    footerMessage.innerText = 'By: Vincent'

    appendAllElements(pageFooter, gitHubLogo, footerMessage);

    return pageFooter;
}

generatePageLayout();
markActiveTab();