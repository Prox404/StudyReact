
const logger = (reducer) => {
    return (state, action) => {
        console.log('state before', state);
        console.log('action', action);
        const newState = reducer(state, action);
        console.log('state after', newState);
        return newState;
    }
}

export default logger;