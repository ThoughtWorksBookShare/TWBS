export default (state = [], action) => {
    if (action.type === "SHOWCOMMENTS") {
        return action.comments;
    }
    return state;
}