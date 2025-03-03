import menuImage from "./menu-item-placeholder.png";

export function loadMenu() {
    const contentDiv = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const menu = document.createElement("div");
    menu.className = "menu";

    for (let i = 0; i < 4; i++) {
        const item = document.createElement("div");
        item.className = "menu-item";

        const placeholder = document.createElement("img");
        placeholder.src = menuImage;

        const dishName = document.createElement("h2");
        dishName.textContent = "DISH NAME";

        const description = document.createElement("p");
        description.textContent = "This is a dish."
        
        item.appendChild(placeholder);
        item.appendChild(dishName);
        item.appendChild(description);
        menu.appendChild(item);
    }

    contentDiv.appendChild(heading);
    contentDiv.appendChild(menu);
}