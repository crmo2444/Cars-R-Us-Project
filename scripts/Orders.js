import { getOrders, getInterior, getPaintColors, getTechnology, getWheels } from "./database.js"

let wheels = getWheels();
let technologies = getTechnology();
let paints = getPaintColors();
let interiors = getInterior();

export const totalPrice = (order) => {
    let totalCost = 0;
    
    const foundWheels = wheels.find(
        (wheels) => {
             if(wheels.id === order.wheelsId) {
                 totalCost += wheels.price
            }
        }
            
            
        )
    const foundTechnology = technologies.find(
        (technology) => {
                    
            if(technology.id === order.technologyId) {
                totalCost += technology.price
                }
            }
                
                
            )
    const foundPaint = paints.find(
        (paint) => {
                if(paint.id === order.paintId) {
                    totalCost += paint.price
                    }
                }
                    
                    
                )

    const foundInterior = interiors.find(
        (interior) => {
                if(interior.id === order.interiorId) {
                    totalCost += interior.price
                    }
                }
                                
                                
            )

    return totalCost
}
       

export const buildOrderListItem = (order, costString) => {
    return `<li>
    Order #${order.id} was placed on ${order.timestamp}
    </li>    
    Order #${order.id} cost ${costString}
    </li>`    
}


//create a function that prints HTML for each order placed (price, order #, time)

export const Orders = () => {

   const orders = getOrders()

   
   const listItems = orders.map((order)=> {
       let newOrder = totalPrice(order)
       const costString = newOrder.toLocaleString("en-US", {
           paint: "currency",
           currency: "USD"
       })
       return buildOrderListItem(order, costString)})
        let html = "<ul>"
                   
    html += listItems.join("")
    html += "</ul>"
    
    return html
}    

