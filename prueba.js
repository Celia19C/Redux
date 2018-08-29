const redux = require ('redux')

const initialState = {
    color: "Rojo",
    nombre: "Juan"
}

const ACTION_TYPES = {
    CHANGE_COLOR: 'CHANGE_COLOR',
    CHANGE_NAME: 'CHANGE_NAME'
}

function miReducer(state = initialState, action) {
    console.log('he recibido la acción', action.type)
    console.log('mi estado es:', state)

    switch (action.type) {
        case ACTION_TYPES.CHANGE_COLOR: {
            return {
                ...state, 
                color: action.color
            }
        }
        case ACTION_TYPES.CHANGE_NAME: {
            return {
                ...state, 
                nombre: action.name
            }
        }
        default: {
            return state
        }
    }
}

const store = redux.createStore(miReducer)


//ACTION CREATORS
function createActionChangeColorToGreen(color) {
    return {
        type: ACTION_TYPES.CHANGE_COLOR,
        color
    }
}


console.log(store.getState())
store.dispatch(createActionChangeColorToGreen("verde"))
console.log(store.getState())
store.dispatch(createActionChangeColorToGreen("violeta"))
console.log(store.getState())
