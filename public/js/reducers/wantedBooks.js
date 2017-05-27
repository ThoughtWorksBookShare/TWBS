export  default (state = {desiredBooks: []}, action) => {
    switch (action.type) {
        case 'GETWANTEDBOOKS':
        {
            return {desiredBooks: action.wantedBooks}
        }
    }
    return state;
}