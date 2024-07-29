export function renderHome() {
    const homeContainer = document.querySelector('.content');
    const homeTitle = document.createElement('h2');
    const homeHorizontalRule = document.createElement('hr');
    const homeParagraph = document.createElement('p');

    homeTitle.textContent = "Home";
    homeTitle.classList.add('title');

    homeParagraph.textContent = "At Maharaja Culinary we aim to treat all our customers as kings and queens. All our staff is highly trained with many years of industry experience, be it for serving your food or making it. The recreated atmosphere of Rajasthan castles will make you blush from hapiness. Come and try out this exquisite experience, we promise that you will feel like royalty.";

    homeParagraph.classList.add('home-content');

    homeContainer.append(homeTitle);
    homeContainer.append(homeHorizontalRule);
    homeContainer.append(homeParagraph);
}