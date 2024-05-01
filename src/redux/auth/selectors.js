const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;
const selectisIsRefreshing = state => state.auth.isRefreshing;

export { selectIsLoggedIn, selectUser, selectisIsRefreshing };