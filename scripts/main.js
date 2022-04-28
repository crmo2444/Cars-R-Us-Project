import { CarsRUs } from "./CarsRUs.js"



const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = `${CarsRUs()}`
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    //if orderBuilder has new order after button click, show the new order
    


    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})