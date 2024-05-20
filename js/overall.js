const logOut = document.getElementById('logOut');

logOut.addEventListener('click', () => {
    sessionStorage.removeItem('super-admin-token');
    window.location.href = '/'
})