import "./menu.css"
const menu = document.createElement("div")
menu.classList.add("menu")
const menuButton = document.querySelector("#menu")


const title = document.createElement("div")
title.classList.add("title")
title.textContent = "Menu"

const description = document.createElement("div")
description.classList.add("description")

const foodList = document.createElement("ul")
foodList.classList.add("foodlist")
const priceList = document.createElement("ul")



const info = document.createElement("div")

const foodArray = []


class food{
    constructor(foodName, price){
        this.name = foodName;
        this.price = price;   

        foodArray.push(this)
        const newFood = document.createElement("li")
        newFood.textContent = this.name
        const newFoodPrice = document.createElement("li")
        newFoodPrice.textContent = this.price

        foodList.appendChild(newFood)
        priceList.appendChild(newFoodPrice)

        }
    

}

const steak = new food("New York Strip", "$20")
const milkTea = new food("Milk Tea", "$5")
const egg = new food("Egg", "$1")
const mf = new food("Middle Finger","$$$")
const pho = new food("Pho","$15")
const milk = new food("Milk","$5")


description.appendChild(foodList)
description.appendChild(priceList)


description.appendChild(foodList)
description.appendChild(priceList)

menu.appendChild(title)
menu.appendChild(description)
menu.appendChild(info)











export { menu, menuButton }