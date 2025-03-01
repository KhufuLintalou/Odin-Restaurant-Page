export function loadAbout() {
    const contentDiv = document.querySelector("#content");

    const paragraph = document.createElement("p");
    paragraph.textContent = "This restaurant was found in 19XX by [REDACTED] and has served millions of people!";

    const contact = document.createElement("p");
    contact.innerHTML = "<strong>Contact:</strong> arestaurant@something.com";

    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(contact);
}