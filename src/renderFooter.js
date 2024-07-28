export function renderFooter() {
    const footer = document.createElement('footer');
    const businessHours = document.createElement('p');
    const address = document.createElement('address');
    const phoneNumber = document.createElement('a');

    businessHours.textContent = "Business hours ~ 8:00AM - 5:00PM"
    address.innerHTML = "<p>Road No. 12,</br> Malviya Nagar,</br> Jaipur, Rajasthan</p></br>";
    phoneNumber.href = "tel: +9123456789";
    phoneNumber.textContent = "+9123456789";

    footer.append(businessHours);
    footer.append(address);
    address.append(phoneNumber);
    document.body.append(footer);
}