export  default (state = {desiredBooks: [],result:''}, action) => {
    switch (action.type) {
        case 'GETWANTEDBOOKS':
        {
            return {desiredBooks: action.wantedBooks}
        }
        case 'CHANGECOUNT':
        {
            return {desiredBooks: action.desiredBooks}
        }
    }
    return state;
}