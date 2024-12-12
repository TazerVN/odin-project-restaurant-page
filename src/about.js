import "./about.css"
import img from "./img/tuan.png"

const about = document.createElement("div")
about.classList.add("about")
const aboutButton = document.querySelector("#about")


const title = document.createElement("div")
title.classList.add("title")
title.textContent = "About"

const logo = document.createElement("img")
logo.src = img

const description = document.createElement("div")
description.classList.add("description")

const detail = document.createElement("div")
detail.textContent = "Founded after Odin Project told me to create a restaurant, TazerVN's bar is an all in one bar that serve any kind of food that the owner wants to serve."


const info = document.createElement("div")
info.textContent = "With over 10 minutes of cooking experience, the restaurant is commited to deliver the worst possible service imaginable. If you are feeling good about your day and want to change that, we will welcome you with close arms."

description.appendChild(detail)
description.appendChild(info)

about.appendChild(title)
about.appendChild(logo)
about.appendChild(description)





export { about, aboutButton }