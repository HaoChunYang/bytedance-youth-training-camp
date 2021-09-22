import { foo } from './foo.js'
import './style.css'
import json from "./data.json5";

// console.log('main2')

console.log(json)
const eleDiv = document.createElement("div")
eleDiv.classList.add("red")
eleDiv.innerText = "my red color"
document.body.append(eleDiv)
const btn = document.createElement("button")
btn.appendChild(document.createTextNode("lazy user 123"));
btn.onclick = async () => {
  const user = await import('./user.js')
  console.log(user)
}
document.body.appendChild(btn)
