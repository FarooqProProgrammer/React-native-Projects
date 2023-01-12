export default function Destination_locationReducer(state = {}, action) {

  

    switch (action.type) {

        case 'SET_Destination_LOCATION': return { ...state, Destination_location: action.data }


        default: return state

    }

}

