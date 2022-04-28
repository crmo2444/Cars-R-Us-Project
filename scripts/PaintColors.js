import { getPaintColors, setPaintColor } from "./database.js";

//create and export a function that generates HTML for paint colors

//iterate through colors
//add to html string

let colors = getPaintColors()

export const PaintColors = () => {
    let html = `<select id="paint-colors" name="paint-color">
                    <option value="0">Select paint color...</option>`

    for (const color of colors) {
        html += `<option value="${color.id}">${color.option} - $${color.price}</option>`
    }

    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint-colors") {
            const chosenOption = changeEvent.target.value
            setPaintColor(parseInt(chosenOption))
            console.log(chosenOption)  // "1" or "2"
        }
    }
)
