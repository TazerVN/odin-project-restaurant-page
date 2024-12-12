import "./homepage.css"
import img from "./img/tuan.png"

const home = document.createElement("div")
home.classList.add("home")
const homeButton = document.querySelector("#home")

const logo = document.createElement("img")
logo.src = img

const title = document.createElement("div")
title.classList.add("title")
title.textContent = "TazerVN's bar"

const description = document.createElement("div")
description.classList.add("description")
description.textContent = "A western style japanese bar that serve Vietnamese Food:"

const food = document.createElement("div")
food.classList.add("food")
food.textContent = "Steak, Egg, Pho, my middle-finger, Milk Tea, Coffee."

const info = document.createElement("div")
info.classList.add("info")
info.textContent = "Info:"

const weekday = document.createElement("div");
weekday.textContent = "Weekday: 08:00 - 21:00";
const weekend = document.createElement("div");
weekend.textContent = "Weekend: 10:00 - 18:00"

const location = document.createElement("div")
location.classList.add("location")
location.textContent = "9/11 World Trade Center"


description.appendChild(food)


info.appendChild(weekday)
info.appendChild(weekend)
info.appendChild(location)

home.appendChild(title)
home.appendChild(logo)
home.appendChild(description)
home.appendChild(info)



export { home, homeButton }