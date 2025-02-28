export function pageLoad() {
    const contentDiv = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "A restaurant";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome! This here restaurant serves only the most succulent meals!";

    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
}