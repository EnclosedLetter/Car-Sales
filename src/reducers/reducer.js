import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/actions";

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}



export const reducer = ( state=initialState, action ) => { //banana word
    switch (action.type) {
      case ADD_FEATURE:
        console.log("I'm adding")
        return state //this is where i need to be changing state
        case REMOVE_FEATURE:
          console.log("We are removing")
          return state //this is where i need to be changing state
        default: 
            return state;
    } 
}




//The reducer is not a react component
// export const initialState = {} we are setting this up
// export const initialState = {}

// export const reducer = ( state, action ) => { //banana word
//     switch (action.type) {
//         default: 
//             return state;
//     } 
// }
// set up reducer first then import to index
// then wrap <App/> in <Provider> </>

