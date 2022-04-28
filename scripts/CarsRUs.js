import { Interior } from "./Interior.js";
import { PaintColors } from "./PaintColors.js";
import { Technology } from "./Technology.js";
import { Wheels } from "./Wheels.js";

//creates a file that interpolates ALL html strings instead of calling them
//individually
//import all 4 previous modules

//create and export function that adds together all HTML strings
//return this single HTML string

export const CarsRUs = () => {
    let html = `
        <h1>Cars R Us</h1>

        <article class="paints">
            <section class="choices__paints">
                <h2>Paint Colors</h2>
                ${PaintColors()}
            </section>
            <section class="choices__interior">
                <h2>Interior</h2>
                ${Interior()}
            </section>
            <section class="choices__technology">
                <h2>Technology Package</h2>
                ${Technology()}
            </section>
            <section class="choices__wheels">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
    `

    return html
}
