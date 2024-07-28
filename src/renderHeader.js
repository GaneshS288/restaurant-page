export function renderHeader(imageSrc) {

    const headerLogoContainer = document.createElement('div');

    //TODO: specify height and width once you choose the banner image
    const headerLogoImg = new Image(400, 400);
    headerLogoImg.src = imageSrc;
    headerLogoImg.classList.add('header-logo');
    const headerLogoTitle = document.createElement('p');
    headerLogoTitle.classList.add('header-title');
    headerLogoTitle.textContent = "Maharaja Culinary";

    const header = document.querySelector('header');

    headerLogoContainer.append(headerLogoImg);
    headerLogoContainer.append(headerLogoTitle);
    header.prepend(headerLogoContainer);
}