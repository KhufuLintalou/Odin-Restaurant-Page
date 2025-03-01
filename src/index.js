import { pageLoad } from "./PageLoad.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

pageLoad();

const nav = document.querySelector("nav");

nav.addEventListener("click", (e) => {
    const target = e.target;
    
    if (target.tagName == "BUTTON") {
        const contentDiv = document.querySelector("#content");
        
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    if (target.textContent == "Home") {
        pageLoad();
    }

    if (target.textContent == "Menu") {
        loadMenu();
    }

    if (target.textContent == "About") {
        loadAbout();
    }
})
