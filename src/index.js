import "./styles.css";
import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayContact } from "./contact.js";

console.log("Hello");

displayHome()

const home = document.querySelector(".hometab")
const menu = document.querySelector(".menutab")
const contact = document.querySelector(".contacttab")

// Only attach listeners if the elements exist and pass the function reference
if (home) home.addEventListener("click", displayHome)
if (menu) menu.addEventListener("click", displayMenu)
if (contact) contact.addEventListener("click", displayContact)