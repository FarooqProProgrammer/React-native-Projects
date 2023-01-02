export default function locationReducer(state = {}, action) {

  

    switch (action.type) {

        case 'SET_LOCATION': return { ...state, location: action.data }


        default: return state

    }

}

