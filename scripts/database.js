const database = {
    paintColor: [
        { id: 1, option: "Silver", price: 200 },
        { id: 2, option: "Midnight Blue", price: 300 },
        { id: 3, option: "Firebrick Red", price: 500 },
        { id: 4, option: "Spring Green", price: 400 }
    ],
    interior: [
        { id: 1, option: "Beige Fabric", price: 400 },
        { id: 2, option: "Charcoal Fabric", price: 400 },
        { id: 3, option: "White Leather", price: 800 },
        { id: 4, option: "Black Leather", price: 800 }
    ],
    technology: [
        { id: 1, option: "Basic Package", price: 300 },
        { id: 2, option: "Navigation Package", price: 700 },
        { id: 3, option: "Visibility Package", price: 400 },
        { id: 4, option: "Ultra Package", price: 1000 }
    ],
    wheels: [
        { id: 1, option: "17-inch Pair Radial", price: 200 },
        { id: 2, option: "17-inch Pair Radial Black", price: 250 },
        { id: 3, option: "18-inch Pair Spoke Silver", price: 400 },
        { id: 4, option: "18-inch Pair Spoke Black", price: 450 }
    ],
    customOrders: [],
    orderBuilder: {}
}

    export const getPaintColors = () => {
        return database.paintColor.map(paintColor => ({...paintColor}))
    }
    export const getInterior = () => {
        return database.interior.map(interior => ({...interior}))
    }
    export const getTechnology = () => {
        return database.technology.map(technology => ({...technology}))
    }
    export const getWheels = () => {
        return database.wheels.map(wheels => ({...wheels}))
    }
    //all functions that will add to orderBuilder to create custom orders
    export const setPaintColor = (id) => {
        database.orderBuilder.paintId = id
    }
    export const setInterior = (id) => {
        database.orderBuilder.interiorId = id
    }
    export const setTechnology = (id) => {
        database.orderBuilder.technologyId = id
    }
    export const setWheels = (id) => {
        database.orderBuilder.wheelsId = id
    }

    //adding function that will store custom orders and refresh the empty
    //object to take in new orders
    export const addCustomOrder = () => {
        // Copy the current state of user choices
        const newOrder = {...database.orderBuilder}
    
        // Add a new primary key to the object
        if (database.customOrders.length === 0) {
            newOrder.id = 1
        }
        else {
        const lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1
        }
    
        // Add a timestamp to the order
        newOrder.timestamp = Date.now()
    
        // Add the new order object to custom orders state
        database.customOrders.push(newOrder)
    
        // Reset the temporary state for user choices
        database.orderBuilder = {}
    
        // Broadcast a notification that permanent state has changed
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }

    export const getOrders = () => {
        return database.customOrders.map(customOrders => ({...customOrders}))
    }
    