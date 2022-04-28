import { getTechnology, setTechnology } from "./database.js";

let technologies = getTechnology()

export const Technology = () => {
    let html = `<select id="technologies" name="technology">
                    <option value="0">Select technology package...</option>`

    for (const technology of technologies) {
        html += `<option value="${technology.id}">${technology.option} - $${technology.price}</option>`
    }

    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technologies") {
            const chosenOption = changeEvent.target.value
            setTechnology(parseInt(chosenOption))
            console.log(chosenOption)  // "1" or "2"
        }
    }
)
