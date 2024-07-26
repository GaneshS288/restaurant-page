export function restaurantHeader(imageSrc) {

    const headerLogoContainer = document.createElement('div');

    //TODO: specify height and width once you choose the banner image
    const headerLogoImg = new Image(400, 400);
    headerLogoImg.style.border = "20px red"
    headerLogoImg.src = imageSrc;

    const headerLogoTitle = document.createElement('p');
    headerLogoTitle.textContent = "Maharaja Culinary";

    const header = document.querySelector('header');

    headerLogoContainer.append(headerLogoImg);
    headerLogoContainer.append(headerLogoTitle);
    header.prepend(headerLogoContainer);
}