import "./styles.css";
import { home, homeButton} from "./homepage";
import { menu, menuButton } from "./menu";
import { about, aboutButton } from "./about";
import { contact, contactButton } from "./contact";


const content = document.querySelector("#content")

homeButton.addEventListener("click", () =>{
    loadPage(home)
})

menuButton.addEventListener("click", () =>{
    loadPage(menu)
})

aboutButton.addEventListener("click", () =>{
    loadPage(about)
})

contactButton.addEventListener("click", () =>{
    loadPage(contact)
})

loadPage(home)


function loadPage(page){
    content.removeChild(content.firstChild);
    content.appendChild(page);

}