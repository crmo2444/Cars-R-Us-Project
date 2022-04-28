import { getTechnology } from "./database.js";

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
            console.log(chosenOption)  // "1" or "2"
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            window.alert(`User chose technology option ${event.target.value}.`)
        }
    }
)