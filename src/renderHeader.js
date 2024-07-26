export function restaurantHeader(imageSrc) {
    //TODO: specify height and width once you choose the banner image
    const headerImg = new Image(300, 400);
    headerImg.style.border = "20px red"
    
    const header = document.querySelector('header');

    header.append(headerImg);

    const headerTitle = document.createElement('p');
    header.append(headerTitle);
}