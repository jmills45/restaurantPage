// Import images
import mapImage from '../images/map.png';

const createContactTab = () => {
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact');

    const map = createGoogleMap();
    contactContent.appendChild(map);


    return contactContent;
}

export { createContactTab };

function createGoogleMap(){
    const mapElement = document.createElement('img');
    mapElement.src = mapImage;
    return mapElement;
}
