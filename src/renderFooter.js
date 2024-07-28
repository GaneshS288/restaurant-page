export function renderFooter() {
    const footer = document.createElement('footer');
    const businessHours = document.createElement('p');
    const address = document.createElement('address');
    const phoneNumber = document.createElement('a');
    const resourceCredits = document.createElement('p');

    businessHours.textContent = "Business hours ~ 8:00AM - 5:00PM"
    address.innerHTML = "<p>Road No. 12,</br> Malviya Nagar,</br> Jaipur, Rajasthan</p></br>";
    phoneNumber.href = "tel: +9123456789";
    phoneNumber.textContent = "+9123456789";
    resourceCredits.innerHTML = "<a href = 'https://unsplash.com/photos/GWNKZ0jpeJA'>background image by unsplash</a>"

    footer.append(businessHours);
    footer.append(address);
    address.append(phoneNumber);
    document.body.append(footer);
    footer.append(resourceCredits);

}