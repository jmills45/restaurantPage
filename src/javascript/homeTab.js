// Import Images
import heroImage from '../images/heroImage.jpg';
import drinkImage from '../images/drinkTile.jpg';
import foodImage from '../images/foodTile.jpg';
import sceneryImage from '../images/sceneryTile.jpg';

// appends all child elements into parent element
function appendAllElements(parentElement, ...children){
    children.forEach((child) => {
        parentElement.appendChild(child);
    })
}

const createHomeTab = () => {
    const homeContent = document.createElement('div');

    const hero = createHero();

    const tiles = createTiles();

    // Combine all elements to form home tab content
    appendAllElements(homeContent, hero, tiles);

    return homeContent;
}

function createHero(){

    // Hero Text Variables
    const headerText = 'Welcome';
    const heroText = 'We have food and drinks for everyone';
    
    // Create wrapper for entire hero element
    const heroElement = document.createElement('div');
    heroElement.classList.add('hero');

    // Create main Hero Image element
    const heroImageElement = document.createElement('img');
    heroImageElement.classList.add('heroImage');
    heroImageElement.src = heroImage;

    // Create wrapper for hero information / text
    const heroInfoWrapper = document.createElement('div');
    heroInfoWrapper.classList.add('heroInfoWrapper');
    
    const heroHeaderElement = document.createElement('h2');
    heroHeaderElement.innerText = headerText;
    
    const heroTextElement = document.createElement('p');
    heroTextElement.innerText = heroText;

    appendAllElements(heroInfoWrapper, heroHeaderElement, heroTextElement);

    // Append Hero Image and Info Wrapper to hero element
    appendAllElements(heroElement, heroImageElement, heroInfoWrapper);

    return heroElement;
}

function createTiles() {

    // Tile text variables
    const drinkTileText = 'Choose from our wide selection of beverages.';
    const foodTileText = ' Our professional in-house chefs never disappoint!';
    const sceneryTileText = 'Enjoy the quiet and scenic athmosphere we pride ourselves in.';

    // Create tile wrapper for various tiles
    const tileWrapperElement = document.createElement('div');
    tileWrapperElement.classList.add('tileWrapper');

    // Create Drink Tile
    const drinkTileElement = document.createElement('div');
    drinkTileElement.classList.add('tile');

    const drinkTileImage = document.createElement('img');
    drinkTileImage.src = drinkImage;
    drinkTileImage.alt = 'Picture of drinks';

    const drinkTileInfo = document.createElement('p');
    drinkTileInfo.innerText = drinkTileText;

    appendAllElements(drinkTileElement, drinkTileImage, drinkTileInfo);

    // Create Food Tile
    const foodTileElement = document.createElement('div');
    foodTileElement.classList.add('tile');

    const foodTileImage = document.createElement('img');
    foodTileImage.src = foodImage;
    foodTileImage.alt = 'Picture of Food';

    const foodTileInfo = document.createElement('p');
    foodTileInfo.innerText = foodTileText;

    appendAllElements(foodTileElement, foodTileImage, foodTileInfo);

    // Create Scenery Tile
    const sceneryTileElement = document.createElement('div');
    sceneryTileElement.classList.add('tile');

    const sceneryTileImage = document.createElement('img');
    sceneryTileImage.src = sceneryImage;
    sceneryTileImage.alt = 'Picture of Pub';

    const sceneryTileInfo = document.createElement('p');
    sceneryTileInfo.innerText = sceneryTileText;

    appendAllElements(sceneryTileElement, sceneryTileImage, sceneryTileInfo);

    // Add all tiles to tile wrapper

    appendAllElements(tileWrapperElement, drinkTileElement, foodTileElement, sceneryTileElement);

    return tileWrapperElement;
}

export { createHomeTab };