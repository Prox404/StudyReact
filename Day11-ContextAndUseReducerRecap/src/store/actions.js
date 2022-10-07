import {CHANGE_INPUT_TODO} from './constants';
import {ADD_TODO} from './constants';
import {DELETE_TODO} from './constants';
import {EDIT_TODO} from './constants';
import {TOGGLE_EDIT} from './constants';

export const changeInputTodo = (payload) => ({
    type: CHANGE_INPUT_TODO,
    payload,
})

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
})

export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload,
})

export const editTodo = (payload) => ({
    type: EDIT_TODO,
    payload,
})

export const toggleEdit = (payload) => ({
    type: TOGGLE_EDIT,
    payload,
})