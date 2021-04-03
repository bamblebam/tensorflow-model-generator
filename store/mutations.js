export default {
    addUser(state, user) {
        state.user = user
    },
    logoutUser(state) {
        state.user = null
    },
    addModel(state, model) {
        state.model = model;
    }
};
