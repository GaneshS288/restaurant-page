export function renderAbout() {
    const aboutContainer = document.querySelector('.content');
    const aboutTitle = document.createElement('h2');
    const aboutParagraph = document.createElement('p');

    aboutTitle.textContent = "About";
    aboutParagraph.textContent = "MahaRaja culinary has been around from 1880s, yes from actual MahaRaja times.If you have anything you want to ask us, please contact us by the form below";
    
    const form = document.createElement('form');

    const formNameContainer = document.createElement('div');
    formNameContainer.classList.add('form-name-container');
    form.append(formNameContainer);

    const formNameLable = document.createElement('label');
    formNameLable.for = "name";
    formNameLable.textContent = "Your Name:"
    formNameContainer.append(formNameLable);

    const formNameInput = document.createElement('input');
    formNameInput.id = "name";
    formNameInput.name = "name";
    formNameInput.type = "text";
    formNameContainer.append(formNameInput);

    const formEmailContainer = document.createElement('div');
    formEmailContainer.classList.add('form-email-container');
    form.append(formEmailContainer);

    const formEmailLable = document.createElement('label');
    formEmailLable.for = "email";
    formEmailLable.textContent = "Your Email:"
    formEmailContainer.append(formEmailLable);

    const formEmailInput = document.createElement('input');
    formEmailInput.id = "email";
    formEmailInput.name = "email";
    formEmailInput.type = "email";
    formEmailContainer.append(formEmailInput);

    const formTextareaContainer = document.createElement('div');
    formTextareaContainer.classList.add('for-textarea-container');
    form.append(formTextareaContainer);

    const formTextareaLable = document.createElement('lable');
    formTextareaLable.for = 'question';
    formTextareaLable.textContent = 'your inquiry:';
    formTextareaContainer.append(formTextareaLable);

    const formTextarea = document.createElement('textarea');
    formTextarea.id = 'question';
    formTextarea.name = 'question';
    formTextareaContainer.append(formTextarea);
    
    aboutContainer.append(aboutTitle);
    aboutContainer.append(document.createElement('hr'));
    aboutContainer.append(aboutParagraph);
    aboutContainer.append(form);
}