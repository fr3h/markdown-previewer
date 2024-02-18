import {
    TOGGLE_MAXIMIZE
} from './maximizeCardButtonActions';

const initialState = {
    maximizedCard: null, // 'editor', 'preview', o null si ninguna está maximizada
};

function maximizeReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MAXIMIZE:
            return {
                ...state,
                maximizedCard: state.maximizedCard === action.payload ? null : action.payload,
            };
        default:
            return state;
    }
}

export default maximizeReducer;