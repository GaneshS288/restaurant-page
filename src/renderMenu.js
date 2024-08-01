export function renderMenu() {
    const menuContainer = document.querySelector('.content');
    const menuTitle = document.createElement('h2');
    const shaiPaneer = document.createElement('p');
    const maharajaThali = document.createElement('p');
    const daalBatiChurma = document.createElement('p');

    menuTitle.textContent = "Menu";
    shaiPaneer.textContent = "Shai Paneer : 100Rs"
    maharajaThali.textContent = "Maharaja Thali : 180Rs"
    daalBatiChurma.textContent = "Daal Bati Churma : 70Rs"
    
    menuContainer.append(menuTitle);
    menuContainer.append(document.createElement('hr'));
    menuContainer.append(shaiPaneer);
    menuContainer.append(maharajaThali);
    menuContainer.append(daalBatiChurma);
}