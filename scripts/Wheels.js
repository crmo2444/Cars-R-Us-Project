import { getWheels } from "./database.js"

let wheels = getWheels()

export const Wheels = () => {
    let html = `<select id="wheels">
                    <option value="0">Select wheels...</option>`

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.option} - $${wheel.price}</option>`
    }

    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)