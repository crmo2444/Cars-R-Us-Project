import { getInterior } from "./database.js";

let interiors = getInterior()

export const Interior = () => {
    let html = `<select id="interiors" name="interior">
                    <option value="0">Select interior...</option>`

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.option} - $${interior.price}</option>`
    }

    html += `</select>`
    return html
}
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            window.alert(`User chose interior option ${event.target.value}.`)
        }
    }
)

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)
