import { getInterior, setInterior } from "./database.js";

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
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            const chosenOption = changeEvent.target.value
            setInterior(parseInt(chosenOption))
            console.log(chosenOption)  // "1" or "2"
        }
    }
)
