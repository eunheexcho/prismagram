export const isAuthenticated = (request) => {
    if (!request.user) {
        throw Error("You have to login.")
    }
    return;
};
