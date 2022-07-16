const initialList = {
    list: []
}


const todoReducer = (state = initialList, action) => {
    switch (action.type) {
        case 'ADD_TODO':

            const { id, data } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        case 'DELETE_TODO':

            const newList = state.list.filter((todo) => todo.id !== action.id)
            return {
                ...state,
                list: newList
            }

        case 'REMOVE_TODO':

            return {
                ...state,
                list: []
            }

        default: return state
    }
}

export default todoReducer;