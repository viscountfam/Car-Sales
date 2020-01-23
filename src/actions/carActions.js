

/// Step 3 build creator function to create and dispatch actions
// for this project you'll need a add and remove item
// These two action objects will probably need an id payload so that the item that needs to be added or removed is clear

//1. action objects

// 2. action creators

//3. action types


//action creator
export const addItem = (item) => {
    // action object
    return { type: 'ADD_ITEM', payload: item };
}


export const removeItem = (item) => {
    return { type: 'REMOVE_ITEM', payload: item };
}