export function CheckAuth() {
    const token = localStorage.getItem('user');
    if (token) {
        return true;
    } else {
        return false;
    }
}