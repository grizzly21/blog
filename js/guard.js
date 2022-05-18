checkToken();

function checkToken(){
    if(!localStorage.getItem('token')){
        window.location.href = '/html/login.html'
    }
}