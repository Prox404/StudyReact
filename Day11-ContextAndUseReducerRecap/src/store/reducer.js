import { CHANGE_INPUT_TODO,ADD_TODO,DELETE_TODO, EDIT_TODO, TOGGLE_EDIT  } from "./constants";
const initialState = {
    todoInput: '',
    todos: [],
    edit: false,
    index_edit: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_INPUT_TODO:
            return {
                ...state,
                todoInput: action.payload,
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoInput: '',
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload),
            }
        case TOGGLE_EDIT:
            return {
                ...state,
                index_edit: action.payload,
                edit: !state.edit,
            }
        case EDIT_TODO:
            state.todos[action.payload.index] = action.payload.todo;
            
            return {
                ...state,
                index_edit: null
            }
        default:
            throw new Error('Unknown action type');
    }
}
export { initialState }
export default reducer;