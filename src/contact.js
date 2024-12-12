import "./contact"
const contact = document.createElement("div")
contact.classList.add("contact")
const contactButton = document.querySelector("#contact")


const title = document.createElement("div")
title.classList.add("title")
title.textContent = "Contact"

const description = document.createElement("div")
description.classList.add("description")
description.textContent ="Phone Number: 1994230+332"


const info = document.createElement("div")
info.textContent = "Email: tazervnisass@wg.com"

description.appendChild(info)


contact.appendChild(title)
contact.appendChild(description)




export { contact, contactButton }