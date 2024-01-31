// check if user is authenticated and user role from localstorage
export const isAuth = () => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');
    return token && userRole;
};