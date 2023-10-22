// Import Images
import beerImage from '../images/beer.jpg';
import cocktailImage from '../images/cocktail.jpg';
import waterImage from '../images/water.jpg';
import burgerImage from '../images/burger.jpg';
import wingsImage from '../images/wings.jpg';
import onionRingsImage from '../images/onionRings.jpg';

const createMenuTab = () => {
    
    const menu = createMenu();
    const menuElement = renderMenu(menu);

    return menuElement;
}

function createMenu(){
    const menu = [];

    const beer = new menuItem('Beer', 'Ice cold draft beer', beerImage);
    menu.push(beer);

    const cocktail = new menuItem('Cocktail', 'Hand-mixed cocktail', cocktailImage)
    menu.push(cocktail);

    const water = new menuItem('Water', 'Refreshing water served with ice', waterImage)
    menu.push(water);

    const burger = new menuItem('Burger', 'Homemade Juicy burger with fries.', burgerImage);
    menu.push(burger);

    const wings = new menuItem('Wings', 'Buffalo chicken wings served with sauce', wingsImage);
    menu.push(wings);

    const onionRings = new menuItem('Onion Rings', 'Freshly fried onion rings.', onionRingsImage);
    menu.push(onionRings);

    return menu;
}

function renderMenu(menu) {

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menuWrapper');

    menu.forEach((item) => {
        const menuTile = document.createElement('div');
        menuTile.classList.add('menuTile');

        const menuTileImage = document.createElement('img');
        menuTileImage.src = item.image;

        const menuTileInfo = document.createElement('div');
        menuTileInfo.classList.add('menuTileInfo');

        const menuTileName = document.createElement('h2');
        menuTileName.innerText = item.name;

        const menuTileDescription = document.createElement('p');
        menuTileDescription.innerText = item.description;

        appendAllElements(menuTileInfo, menuTileName, menuTileDescription)

        appendAllElements(menuTile, menuTileImage, menuTileInfo);

        menuWrapper.appendChild(menuTile);
    })

    return menuWrapper;
}

class menuItem {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

// appends all child elements into parent element
function appendAllElements(parentElement, ...children){
    children.forEach((child) => {
        parentElement.appendChild(child);
    })
}


export { createMenuTab };